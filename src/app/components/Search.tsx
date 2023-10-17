'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const SearchInput = ({ username }: any) => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  console.log(searchQuery)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    router.push(`/${searchQuery}`)
  }

  return (
  <div>
    <input
      type='text'
      placeholder='Buscar'
      value={searchQuery}
      onChange={(e) => { setSearchQuery(e.target.value) }}
      className='bg-zinc-700/40 rounded-lg w-[320px] h-[32px] pl-4 mt-2 ml-2'
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSubmit(e)
        }
      }}
    />
  </div>
  )
}

export default SearchInput
