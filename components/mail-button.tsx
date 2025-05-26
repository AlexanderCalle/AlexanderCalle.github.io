import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'

const MailButton = () => {
  return (
    <Button size="sm" variant="outline" asChild>
      <Link href="mailto:callebauta@hotmail.com" target='_blank'>
        <Mail className="w-4 h-4 mr-2" />
        Email
      </Link>
    </Button>
  )
}

export default MailButton