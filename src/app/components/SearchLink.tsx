import { SearchIcon } from '../../icons/SearchIcon'

export default function Search () {
  return (
    <div className={'flex flex-row gap-x-4 pl-4 py-3 ml-2 my-1 active:brightness-50 hover:bg-neutral-700/40 transition-background duration-200 rounded-lg'}>
      <SearchIcon />
      <span>Búsqueda</span>
    </div>
  )
}
