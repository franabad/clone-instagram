'use client'

import { usePathname } from 'next/navigation'
import { ExploreIcon } from '@/icons/ExploreIcon'
import { ExploreIconTransp } from '@/icons/ExploreIconTransp'

export default function Explore () {
  const pathName = usePathname()
  return (
    <div className={`flex flex-row gap-x-4 pl-4 py-3 ml-2 my-1 active:brightness-50 hover:bg-neutral-700/40 transition-background duration-200 rounded-lg ${pathName === '/explore' ? 'font-bold' : 'font-normal'}`}>
      {pathName === '/explore' ? <ExploreIcon /> : <ExploreIconTransp />}
      <span>Explorar</span>
    </div>
  )
}
