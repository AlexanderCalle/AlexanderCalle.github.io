"use client"

import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between w-full h-16 px-8">
        <div className="text-xl font-bold">Alexander Callebaut</div>
        <div className="flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </a>
          <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </a>
          <a href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
            Projects
          </a>
          <Button size="sm" asChild>
            <Link href="mailto:callebauta@hotmail.com" target="_blank">
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar