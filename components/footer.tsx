import { Linkedin } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import Link from 'next/link'
import GithubButton from './github-button'
import MailButton from './mail-button'

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
     <div className="px-16 py-12">
       <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
         <div className="text-center md:text-left">
           <h3 className="text-lg font-bold">Alexander Callebaut</h3>
           <p className="text-muted-foreground">Full-stack developer</p>
         </div>
         <div className="flex space-x-4">
           <GithubButton />
           <Button size="sm" variant="outline" asChild>
             <Link href="https://www.linkedin.com/in/alexander-callebaut/" target='_blank'>
               <Linkedin className="w-4 h-4 mr-2" />
               LinkedIn
             </Link>
           </Button>
          <MailButton />
         </div>
       </div>
       <Separator className="my-6" />
       <div className="text-sm text-center text-muted-foreground">
         © {new Date().getFullYear()} Alexander Callebaut. All rights reserved.
       </div>
     </div>
   </footer>
  )
}

export default Footer