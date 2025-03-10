import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
        <ChevronLeft className="h-4 w-4" />
        Back to all posts
      </Link>

      <article className="prose prose-stone dark:prose-invert max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}

