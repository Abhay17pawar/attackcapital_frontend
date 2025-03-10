import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { BlogPost } from "@/types/blog"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-video relative">
          <Image
            src={"/will "}
            alt={"will do this if I get selected in attack capital"}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardHeader>
          <h3 className="text-xl font-bold leading-tight">{post.title}</h3>
        </CardHeader>
      </Link>
    </Card>
  )
}

