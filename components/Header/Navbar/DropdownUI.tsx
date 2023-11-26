import { Button } from '@/components/ui/button'
import { DropdownMenuShortcut, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { BrainCog, Contact, DownloadCloud, FolderGit2, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

function DropdownUI() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'><HamburgerMenuIcon /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-48'>
          <DropdownMenuItem>
            <Link href="/">Home</Link>
            <DropdownMenuShortcut><Home size={16}/></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about">About</Link>
            <DropdownMenuShortcut><BrainCog size={16}/></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/projects">Projects</Link>
            <DropdownMenuShortcut><FolderGit2 size={16}/></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">Contact</Link>
            <DropdownMenuShortcut><Contact size={16}/></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Download CV
            <DropdownMenuShortcut><DownloadCloud size={16}/></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator className='flex flex-row items-center justify-center w-full'/>
            <ModeToggle />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default DropdownUI