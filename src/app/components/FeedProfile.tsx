import { notFound } from 'next/navigation'

export const FeedProfile = async ({ username }: any) => {
  const res = await fetch(`http://localhost:3001/users/${username}`)
  const data = await res.json()

  if (!data) notFound()

  const resPosts = await fetch(`http://localhost:3001/feed/${username}`)
  const posts = await resPosts.json()

  return (
    <div className="flex flex-col gap-5 items-center h-full">
      <div className="w-[47%] flex flow-col h-full pt-[30px] px-5">
        <header className="w-full flex flex-row h-[237px] mb-11">
          <div className="mr-[30px] items-center relative">
            <div className="block self-center relative">
              {/* <canvas className="rounded-full left-[-9px] absolute top-[-9px] h-[168px] w-[168px]" width="168" height="168"></canvas> */}
              <span className="h-[150px] w-[150px] box-border overflow-x-hidden block overflow-y-hidden">
                <img src={data.avatar_url} alt={'Foto de perfil de' + data.username} className="rounded-full object-cover" draggable="false" ></img>
              </span>
            </div>
          </div>
          <h2 className="text-2xl font-bold">{data.username}</h2>
          <p className="text-sm text-gray-500">{data.name} {data.lastname}</p>
        </header>
      </div>
      {posts.map((posts: any) => (
          <div key={posts.post_id}>
            <img width={320} src={posts.url} alt='Prueba' />
            <h2>{posts.caption}</h2>
          </div>
      ))}
    </div>
  )
}

export default FeedProfile
