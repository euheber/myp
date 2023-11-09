function register() {
  return (
    <main className="mt-10 px-5 pb-2">
      <h1 className="font-lorat text-xl">
        Cadastre a ONG para ter acesso a nossas ferramentas
      </h1>

      <form className="mt-10 flex flex-col gap-5">
        <details className="border space-y-5">
          <summary className="cursor-pointer">Sobre a ong</summary>

          <div>
            <label htmlFor="ongname" className="mr-3">
              Nome da organização:
            </label>
            <input type="text" id="ongname" className="border" />
          </div>

          <div>
            <label className="mr-3">Estado:</label>
            <select>
              <option value="sp">São Paulo</option>
            </select>
          </div>

          <div>
            <label className="mr-3">Cidade:</label>
            <select>
              <option value="cosmópolis">Cosmópolis</option>
            </select>
          </div>

          <div>
            <label htmlFor="street" className="mr-3">
              Rua:
            </label>
            <input type="text" id="street" className="border" />
          </div>

          <div>
            <label htmlFor="street" className="mr-3">
              Número:
            </label>
            <input type="text" id="number" className="border" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="details" className="mr-3">
              Um pouco sobre a ong
            </label>
            <textarea
              name="details"
              id="details"
              cols="30"
              rows="10"
              className="border border-black rounded-md"
            ></textarea>
          </div>
        </details>

        <details className="space-y-5">
          <summary className="cursor-pointer">Responsável</summary>

          <div>
            <label htmlFor="name" className="mr-3">
              Nome
            </label>
            <input type="text" id="name" className="border" />
          </div>

          <div>
            <label htmlFor="email" className="mr-3">
              Email
            </label>
            <input type="text" id="email" className="border" />
          </div>

          <div>
            <label htmlFor="password" className="mr-3">
              Senha
            </label>
            <input type="text" id="email" className="border" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="profilepicture">Foto de perfil</label>
            <input type="file" name="" id="" />
          </div>
        </details>


        <button className="border border-black hover:text-freesia duration-150 transition w-56 mx-auto rounded-md p-2">
            Cadastrar
        </button>
      </form>
    </main>
  )
}

export default register
