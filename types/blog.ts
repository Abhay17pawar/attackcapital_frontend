export interface Author {
  name: string
  avatar: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  readTime: number
  category: string
  author: Author
}

