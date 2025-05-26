import React from 'react'
import { Button } from './ui/button'
import { Github, Mail } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section id="home" className="container py-24 md:py-32">
    <div className="flex flex-col items-center space-y-8 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          <span className="text-primary">Software</span> developer
          <br />
          brewed at young age
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
          Passionate about creating innovative solutions and bringing ideas to life through code
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="px-8 text-lg" asChild>
          <Link href="mailto:callebauta@hotmail.com" target='_blank'>
            <Mail className="w-5 h-5 mr-2" />
            Contact
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="px-8 text-lg" asChild>
          <Link href="https://github.com/AlexanderCalle" target='_blank'>
            <Github className="w-5 h-5 mr-2" />
            Projects
          </Link>
        </Button>
      </div>
    </div>
  </section>
  )
}

export default HeroSection