function register() {
  return (
    <main className="mt-10 px-5 pb-2">
      <p className="font-lorat text-xl">Antes de prosseguir, escolha se você</p>

      <form className="mt-10 flex flex-col gap-5">
        <details className="cursor-pointer">
          <summary >Sobre a ong</summary>
          <div>
            <label htmlFor="name" className="mr-3">
              Nome da organização:
            </label>
            <input type="text" id="name" className="border" />
          </div>

          <div>
            <label htmlFor="address" className="mr-3">
              Endereço:
            </label>
            <input type="text" id="address" className="border" />
          </div>

          
          <div className="flex flex-col">
            <label htmlFor="details" className="mr-3">
              Um pouco sobre a ong
            </label>
            <textarea name="details" id="details" cols="30" rows="10"></textarea>
          </div>
        </details>


        <details>
            <summary>Sobre você</summary>
        </details>
      </form>
    </main>
  )
}

export default register
