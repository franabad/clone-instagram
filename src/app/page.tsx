import Aside from './components/Aside'
import Logo from './components/LogoLink'

export default function Layout () {
  return (
    <main className='flex flex-row'>
      <aside className="flex flex-col h-screen w-[336px] border-r-[0.5px] border-gray-400/20">
        <div className='ml-2 pl-4 h-[92px] items-center w-[320px] flex mt-2'>
          <Logo />
        </div>
        <div className='mt-[5px] w-[320px]'>
          <Aside />
        </div>
      </aside>
    </main>
  )
}
