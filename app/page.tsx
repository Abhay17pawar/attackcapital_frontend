import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/types/blog'; 

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:5001/api/posts'); 
        if (!res.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">All Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post._id} className="overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative">
                <img
                  src={post.coverImage || '/placeholder.svg'}
                  alt={post.title}
                  className="object-cover w-full h-60 transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
