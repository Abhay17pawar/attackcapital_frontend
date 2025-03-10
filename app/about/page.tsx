import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About My Blog</h1>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Blog Author"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Hello, I'm John Doe</h2>
            <p className="text-muted-foreground mb-4">
              I'm a passionate developer and writer who loves sharing knowledge about technology, design, and the
              digital world.
            </p>
            <p className="text-muted-foreground mb-4">
              With over 10 years of experience in the tech industry, I've worked with various technologies and
              frameworks, from frontend development to backend systems.
            </p>
            <p className="text-muted-foreground">
              This blog is my way of giving back to the community and sharing insights I've gained throughout my career.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            My mission is to create accessible, practical, and insightful content that helps developers at all stages of
            their careers. Whether you're just starting out or you're a seasoned professional, I aim to provide value
            through tutorials, deep dives, and thought-provoking articles.
          </p>
          <p className="text-muted-foreground">
            I believe in the power of knowledge sharing and continuous learning. Technology moves fast, and staying
            updated is crucial for success in this field.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Topics I Cover</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Web Development (React, Next.js, Vue, etc.)</li>
            <li>UI/UX Design Principles</li>
            <li>Performance Optimization</li>
            <li>Career Development for Developers</li>
            <li>Technology Trends and Innovations</li>
            <li>Developer Lifestyle and Productivity</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-4">
            Have a question, suggestion, or just want to say hello? I'd love to hear from you! Feel free to reach out
            through any of the channels below:
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline">Twitter</Button>
            <Button variant="outline">GitHub</Button>
            <Button variant="outline">LinkedIn</Button>
            <Button variant="outline">Email</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

