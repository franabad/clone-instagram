export const FeedProfile = async ({ username = 'franabad' }: any) => {
  // const resPosts = await fetch(`http://localhost:3001/feed/${username}`)
  // const posts = await resPosts.json()

  const resUser = await fetch(`http://localhost:3001/users/${username}`)
  const data = await resUser.json()

  const user = {
    username: data[0].username,
    name: data[0].name,
    lastname: data[0].lastname,
    n_posts: data[0].n_posts,
    n_followers: data[0].n_followers,
    n_following: data[0].n_following,
    avatar_url: data[0].avatar_url,
    bio: data[0].bio
  }

  console.log(user)

  return (
    <div className="flex flex-col gap-5 items-center h-full">
      <div className="w-[47%] flex flow-col h-full pt-[30px] px-5">
        <header className="w-full flex flex-row h-[237px] mb-11">
          <div className="mr-[30px] items-center relative">
            <div className="block self-center relative">
              <canvas className="rounded-full" width="168" height="168" style={{ left: '-9px', position: 'absolute', top: '-9px', height: '168px', width: '168px' }}></canvas>
              <span className="h-[150px] w-[150px] box-border overflow-x-hidden block overflow-y-hidden">
                <img src={user.avatar_url} alt={'Foto de perfil de' + user.username} className="rounded-full object-cover" draggable="false" ></img>
              </span>
            </div>
          </div>
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <p className="text-sm text-gray-500">{user.name} {user.lastname}</p>
        </header>
      </div>
      {/* {posts.map((posts: any) => (
          <div key={posts.post_id}>
            <img width={320} src={posts.url} alt='Prueba' />
            <h2>{posts.caption}</h2>
          </div>
      ))} */}
    </div>
  )
}

export default FeedProfile
