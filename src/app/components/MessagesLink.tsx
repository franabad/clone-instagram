'use client'

import { MessagesIcon } from '@/icons/MessagesIcon'
import { MessagesIconTransp } from '@/icons/MessagesIconTransp'
import { usePathname } from 'next/navigation'

export default function Messages () {
  const pathName = usePathname()
  return (
    <div className={`flex flex-row gap-x-4 pl-4 py-3 ml-2 active:brightness-50 hover:bg-neutral-700/40 transition-background duration-200 rounded-lg ${pathName === '/reels' ? 'font-bold' : 'font-normal'}`}>
      {pathName === '/messages' ? <MessagesIcon /> : <MessagesIconTransp />}
      <span>Mensajes</span>
    </div>
  )
}
