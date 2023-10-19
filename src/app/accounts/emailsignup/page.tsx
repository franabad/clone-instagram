const RegisterPage = () => {
  return (
    <main className="flex-1 w-screen h-screen items-stretch flex box-border flex-col">
      <div className="bg-white mb-11 min-h-[100%] items-center flex justify-center flex-row relative">
        <div className="items-center flex-col flex-1 justify-center max-w-[350px] mt-3">
          <div className="border flex flex-col items-center box-border align-baseline relative py-[10px] mb-[10px]">
            <div className="mb-5 block">
              <form className="flex flex-col max-w-[350px] align-baseline">
                <div className="mx-10 mb-[10px] block text-gray-500 font-semibold">
                  <span className="text-center flex">
                    Regístrate para ver fotos y vídeos de tus amigos.
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <button className="bg-sky-500 rounded-md">
                      <span className="text-white font-semibold text-center">Iniciar sesión con Facebook</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default RegisterPage
