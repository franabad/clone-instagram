import { NotiIcon } from '@/icons/NotiIcon'
import { CreateIcon } from '@/icons/CreateIcon'
import Home from './HomeLink'
import Link from 'next/link'
import Search from '@/app/components/SearchLink'
import Explore from './ExploreLink'
import Reels from './ReelsLink'
import Messages from './MessagesLink'
import Logo from './LogoLink'
import { SearchInput } from './Search'

export default function Aside (username: any) {
  return (
    <aside className="flex flex-col h-screen w-[336px] border-r-[0.5px] border-gray-400/20">
      <div className='w-[320px]'>
        <div className='ml-2 pl-4 h-[92px] items-center w-[320px] flex mt-2'>
          <Logo />
        </div>
        <ul className='flex flex-col'>
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
              <div className='flex flex-row gap-x-4 pl-4 py-3 ml-2 my-1 active:brightness-50 hover:bg-zinc-700/40 transition-background duration-200 rounded-lg'>
                <NotiIcon />
                <span>Notificaciones</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <div className='flex flex-row gap-x-4 pl-4 py-3 ml-2 my-1 active:brightness-50 hover:bg-zinc-700/40 transition-background duration-200 rounded-lg'>
                <CreateIcon />
                <span>Crear</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <div className='flex flex-row gap-x-4 pl-4 py-3 ml-2 my-1 active:brightness-50 hover:bg-zinc-700/40 transition-background duration-200 rounded-lg'>
                <img src='/perfil.jpg' alt='Perfil' width={24} height={24} className='rounded-full'/>
                <span>Perfil</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <SearchInput username={username}/>
      </div>
    </aside>
  )
}
