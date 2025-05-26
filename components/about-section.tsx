import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { SkillCategory, skills } from '@/lib/data/skills'
import { Badge } from './ui/badge'
import { Code, Database, Globe, Palette, Server } from 'lucide-react'
import ProfileImage from './assets/profile-image.jpg'

const AboutSection = () => {

  const getCategoryIcon = (category: SkillCategory) => {
    switch(category) {
      case "frontend":
      case "mobile":
        return <Code className="w-4 h-4" />
      case "backend":
        return <Server className='w-4 h-4' />
      case "database":
        return <Database className="w-4 h-4" />
      case "design":
        return <Palette className="w-4 h-4" />
      default:
        return <Globe className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: SkillCategory) => {
    switch (category) {
      case "frontend":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "backend":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "database":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "design":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
      case "mobile":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }


  return (
   <section id="about" className="container py-24">
    <div className="grid items-start gap-12 h-fit lg:grid-cols-2">
      {/* Who am I */}
      <Card className='h-full'>
        <CardHeader>
          <CardTitle className="text-2xl">Who am I?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <Avatar className="rounded-full w-30 h-30">
              <AvatarImage 
                className='object-cover rounded-full w-30 h-30'
                src={ProfileImage.src}
                alt='Alexander Callebaut'
              />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="leading-relaxed text-muted-foreground">
                A passionate and driven software developer with a solid foundation in programming and an open mind
                to learn new tools. I have some experience in web development and have been programming for almost
                three years of managing finances and coordination of the main operations of my youth association.
                Ever since I developed several projects to learn more about the technologies that the world has to
                offer.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className='h-full'>
        <CardHeader>
          <CardTitle className="text-2xl">Skills</CardTitle>
          <CardDescription>Technologies and tools I work with</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className={`${getCategoryColor(skill.category)} flex items-center gap-1`}
              >
                {getCategoryIcon(skill.category)}
                {skill.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
  )
}

export default AboutSection