import { NotiIcon } from '@/icons/NotiIcon'
import { CreateIcon } from '@/icons/CreateIcon'
import Imagen from 'next/image'
import Home from './HomeLink'
import Link from 'next/link'
import Search from '@/app/components/SearchLink'
import Explore from './ExploreLink'
import Reels from './ReelsLink'
import Messages from './MessagesLink'

export default function Aside () {
  return (
    <ul className='flex flex-col gap-y-2'>
      <li>
        <Link href='/'>
          <Home />
        </Link>
      </li>
      <li>
        <Link href='#'>
          <Search/>
        </Link>
      </li>
      <li>
        <Link href='/explore'>
          <Explore />
        </Link>
      </li>
      <li>
        <Link href='/reels'>
          <Reels />
        </Link>
      </li>
      <li>
        <Link href='/messages'>
          <Messages />
        </Link>
      </li>
      <li>
        <Link href='#'>
          <div className='flex flex-row gap-x-4 pl-4 py-3 ml-2 active:brightness-50 hover:bg-zinc-700/40 transition-background duration-200 rounded-lg'>
            <NotiIcon />
            <span>Notificaciones</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href='#'>
          <div className='flex flex-row gap-x-4 pl-4 py-3 ml-2 active:brightness-50 hover:bg-zinc-700/40 transition-background duration-200 rounded-lg'>
            <CreateIcon />
            <span>Crear</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href='#'>
          <div className='flex flex-row gap-x-4 pl-4 py-3 ml-2 active:brightness-50 hover:bg-zinc-700/40 transition-background duration-200 rounded-lg'>
            <Imagen src='/perfil.jpg' alt='Perfil' width={24} height={24} className='rounded-full'/>
            <span>Perfil</span>
          </div>
        </Link>
      </li>
    </ul>
  )
}
