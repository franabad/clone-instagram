'use client'

import { useEffect, useState } from 'react'
import { Login } from './LogIn'
import Aside from './Aside'

export default function CheckSession () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(() => {
    // const token = Cookies.get('token')

    // Valide el token JWT
    // const isTokenValid = jwt.verify(token, secretKey)

    // Actualiza el estado con el estado de la sesión del usuario
    // setIsLoggedIn(isTokenValid)

    // Observe el token JWT
    // const [token] = useState(null)
  }, [isLoggedIn])
  return (
    <>
    {isLoggedIn
      ? (
        <>
        <Aside />
        <section className='flex-1 items-center flex flex-col pt-[22px]'>
          <div className="h-full flex flex-col items-center w-[46.5%]">
            <div className="w-full h-full justify-center">
              <div className="gap-x-3 flex mt-5 border-b-[0.5px] pb-3  border-gray-400/20 w-full">
                <span className="font-bold">Para ti</span>
                <span className='brightness-50 font-[640]'>Siguiendo</span>
              </div>

            </div>
          </div>
        </section></>
        )
      : (<Login />)
    }
    </>
  )
}
