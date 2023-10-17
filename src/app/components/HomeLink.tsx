'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { HomeIcon } from '@/icons/HomeIcon'
import { HomeIconTransp } from '@/icons/HomeIconTransp'

export default function Home () {
  const pathName = usePathname()
  return (
    <div className={`flex flex-row gap-x-4 pl-4 py-3 ml-2 my-1 active:brightness-50 hover:bg-neutral-700/40 transition-background duration-200 rounded-lg ${pathName === '/' ? 'font-bold' : 'font-normal'}`}>
      {pathName === '/' ? <HomeIcon /> : <HomeIconTransp />}
      <span>Inicio</span>
    </div>
  )
}
