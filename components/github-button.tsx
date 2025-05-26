import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Github } from 'lucide-react'

const GithubButton = () => {
  return (
    <Button size="sm" variant="outline" asChild>
      <Link href="https://github.com/AlexanderCalle" target='_blank'>
        <Github className="w-4 h-4 mr-2" />
        GitHub
      </Link>
    </Button>
  )
}

export default GithubButton