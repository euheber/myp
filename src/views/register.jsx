import { useState } from "react"
import InputField from "../components/Inputs/InputField"
import SelectField from "../components/Inputs/SelectField"

function register() {
  const [user, setUser] = useState({ 
    ongname: '',
    neighborhood: '', 
    street: '',
    number: '',
    name: '',
    email: '',
    password: '',
    state: '',
  })

  const handleMeuValorChange = (event) => {
    console.log(event.target.name);
    setUser({ 
      ...user,
      [event.target.name]: event.target.value
    })
  }

  return (
    <main className="mt-10 px-5 pb-2">
        {user.state}
      <h1 className="font-lorat text-xl">
        Cadastre a ONG para ter acesso a nossas ferramentas
      </h1>

      <form className="mt-10 flex flex-col gap-5">
        <details className="border space-y-5">
          <summary className="cursor-pointer">Sobre a ong</summary>
      {}
          <InputField
            onInputChange={handleMeuValorChange}
            type="text"
            identity={"ongname"}
            label={"Nome da Organização"}
            name={'ongname'}
          />

          <InputField
            onInputChange={handleMeuValorChange}
            type="text"
            identity={"street"}
            label={"Rua"}
            name={'street'}
          />

          <InputField
            onInputChange={handleMeuValorChange}
            type="text"
            identity={"bairro"}
            label={"Bairro"}
            name={'neighborhood'}
          />


          <InputField
            onInputChange={handleMeuValorChange}
            type="text"
            identity={"number"}
            label={"Número"}
            name={'number'}
          />

          <div className="flex gap-4">
            <label>Estado/Cidade</label>
            < SelectField onSelectChange={handleMeuValorChange} value={'sp'} name={"state"} content={"São Paulo"}/>
          </div>
        </details>

        <details>
          <summary className="cursor-pointer">Responsável</summary>

          <InputField
            onInputChange={handleMeuValorChange}
            type={"text"}
            identity={"name"}
            label={"Nome"}
            name={"name"}
          />
          <InputField
            onInputChange={handleMeuValorChange}
            type={"text"}
            identity={"email"}
            label={"Email"}
            name={"email"}
          />
          <InputField
            onInputChange={handleMeuValorChange}
            type={"text"}
            identity={"password"}
            label={"Senha"}
            name={"password"}
          />
        </details>


        <button className="border border-black p-4 w-40 rounded-md mx-auto cursor-pointer hover:text-freesia transition duration-150" >Cadastrar</button>
      </form>
    </main>
  )
}

export default register
