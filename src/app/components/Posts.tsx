import React from 'react'

const getPosts = async ({ username, name, email }: any) => {
  const res = await fetch(`http://localhost:3001/users/${username}}`)
  console.log(res)
}

const Posts = ({ username }: any) => {
  return (
    <div>

    </div>
  )
}

getPosts('franabad')

export default Posts
