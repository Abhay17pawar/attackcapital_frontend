"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { blogCategories } from "@/data/blog-posts"

export function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={activeCategory === null ? "default" : "outline"}
        size="sm"
        onClick={() => setActiveCategory(null)}
      >
        All
      </Button>
      {blogCategories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

