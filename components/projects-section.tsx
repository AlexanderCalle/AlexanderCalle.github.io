import { projects } from '@/lib/data/projects'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'
import { Badge } from './ui/badge'
import Link from 'next/link'

const ProjectsSection = () => {
  return (
    <section id="projects" className="container py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Projects</h2>
        <p className="text-lg text-muted-foreground">Some of my recent work and side projects</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="pt-0 transition-all duration-300 group hover:shadow-lg">
            <div className="relative mt-0 overflow-hidden rounded-t-lg aspect-video">
              {project.image && (<Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="mt-0 transition-transform duration-300 object-fit group-hover:scale-105"
              />)}
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {project.title}
                {project.link && (
                  <Button size="sm" variant="ghost" className="transition-opacity opacity-0 group-hover:opacity-100" asChild>
                    <Link href={project.link} target='_blank'>
                    <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                )}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection