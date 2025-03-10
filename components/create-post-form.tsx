"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { blogCategories } from "@/data/blog-posts"
import axios from "axios"  // Make sure axios is installed for making API calls

export function CreatePostForm({ onSubmit, onCancel }: { onSubmit: (post: any) => void; onCancel: () => void }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newPost = {
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      excerpt: content.slice(0, 150) + "...",
      content,
      coverImage: "/placeholder.svg?height=400&width=800",
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      readTime: Math.ceil(content.split(" ").length / 200),
      category,
      authorId: "USER_ID_HERE",  // You should get this dynamically based on the logged-in user
    }

    try {
      setIsLoading(true)
      const response = await axios.post("http://localhost:5001/api/posts", newPost, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,  
        },
      })

      onSubmit(response.data)
      setIsLoading(false)
      alert("Post created successfully!")
    } catch (error) {
      setIsLoading(false)
      setErrorMessage("Error creating post")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg shadow">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="min-h-[200px]"
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select onValueChange={setCategory} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {blogCategories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Post"}
        </Button>
      </div>
      {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
    </form>
  )
}
