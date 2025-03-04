import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  repoUrl: string
}

export default function ProjectCard({ title, description, image, tags, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <div className="project-card group rounded-lg overflow-hidden border bg-card shadow-sm">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5 space-y-4">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between pt-2">
          <Link
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4 mr-1" /> Code
          </Link>
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-1" /> Demo
          </Link>
        </div>
      </div>
    </div>
  )
}

