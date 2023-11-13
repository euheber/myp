import { useState } from "react"
import InputField from "../components/Inputs/InputsField"
import OptionsField from "../components/Inputs/OptionField"

function register() {
  const [meuValor, setMeuValor] = useState("")

  const handleMeuValorChange = (novoValor) => {
    setMeuValor(novoValor)
  }

  return (
    <main className="mt-10 px-5 pb-2">
      <h1 className="font-lorat text-xl">
        Cadastre a ONG para ter acesso a nossas ferramentas
      </h1>

      <form className="mt-10 flex flex-col gap-5">
        <details className="border space-y-5">
          <summary className="cursor-pointer">Sobre a ong</summary>

          <InputField
            onInputChange={handleMeuValorChange}
            type="text"
            identity={"ongname"}
            label={"Nome da Organização"}
          />

          <InputField
            onInputChange={handleMeuValorChange}
            type="text"
            identity={"street"}
            label={"Rua"}
          />
          <InputField
            onInputChange={handleMeuValorChange}
            type="text"
            identity={"number"}
            label={"Número"}
          />

          <div className="flex gap-4">
            <label>Estado/Cidade</label>
            <select>
              <OptionsField value={"sp"} content={"São paulo"} />
            </select>

            <select>
              <OptionsField value={"cosmopolis"} content={"Cosmópolis"} />
            </select>
          </div>
        </details>

        <details>
          <summary className="cursor-pointer">Responsável</summary>

          <InputField
            onInputChange={handleMeuValorChange}
            type={"text"}
            identity={"name"}
            label={"Nome"}
          />
          <InputField
            onInputChange={handleMeuValorChange}
            type={"text"}
            identity={"email"}
            label={"Email"}
          />
          <InputField
            onInputChange={handleMeuValorChange}
            type={"text"}
            identity={"password"}
            label={"Senha"}
          />
        </details>


        <button className="border border-black p-4 w-40 rounded-md mx-auto cursor-pointer hover:text-freesia transition duration-150" >Cadastrar</button>
      </form>
    </main>
  )
}

export default register
