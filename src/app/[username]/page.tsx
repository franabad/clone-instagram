import React from 'react'
import Aside from '../components/Aside'
import { FeedProfile } from '../components/FeedProfile'

const Profile = async ({ params }: any) => {
  const { username } = params
  return (
    <main className='flex flex-row'>
      <Aside />
      <section className='flex-1'>
        <FeedProfile username={username} />
      </section>
    </main>
  )
}

export default Profile
