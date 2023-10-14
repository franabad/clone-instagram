'use client'

import { ReelsIcon } from '@/icons/ReelsIcon'
import { ReelsIconTransp } from '@/icons/ReelsIconTransp'
import { usePathname } from 'next/navigation'

export default function Reels () {
  const pathName = usePathname()
  return (
    <div className={`flex flex-row gap-x-4 pl-4 py-3 ml-2 active:brightness-50 hover:bg-neutral-700/40 transition-background duration-200 rounded-lg ${pathName === '/reels' ? 'font-bold' : 'font-normal'}`}>
      {pathName === '/reels' ? <ReelsIcon /> : <ReelsIconTransp />}
      <span>Reels</span>
    </div>
  )
}
