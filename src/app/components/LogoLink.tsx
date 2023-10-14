'use client'
import InstaIcon from '@/icons/InstaIcon'
import Link from 'next/link'

export default function Logo () {
  return (
    <Link href='/'>
      <div className='flex w-[300px] active:brightness-50'>
        <InstaIcon />
      </div>
    </Link>
  )
}
