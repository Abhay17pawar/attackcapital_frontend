import { BlogCard } from "@/components/blog-card"
import { blogPosts } from "@/data/blog-posts"

export default function dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">My Blog</h1>
        <p className="text-muted-foreground">Welcome to my blog where I share my thoughts and ideas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

