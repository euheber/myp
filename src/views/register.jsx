import { useState, useRef } from "react"
import InputField from "../components/Inputs/InputField"
import OptionField from "../components/Inputs/OptionField"


function register() {
  const inputRef = useRef(null)
  const [user, setUser] = useState({
    ongname: "",
    neighborhood: "",
    street: "",
    number: "",
    name: "",
    email: "",
    password: "",
    state: "",
  })

  const [validEmail, setEmail] = useState('')
  const [ exist, setExist] = useState('')
  const handleInputChange = (event, objectId) => {
    const targetKey = objectId !== undefined ? objectId : event.target.name;
    setUser({
      ...user,
      [targetKey]: event.target.value,
    });
  };

  const registerUser = async (event) => { 
    event.preventDefault()
 
        const request = await fetch("http://localhost:3000/user", {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify(user)
        })
       
        if(!request.ok){
          const errorMsg = await request.json()
          inputRef.current.focus
          setExist(`${errorMsg.error}`)
          setTimeout(()=> setExist(""), 4000)
        }
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
            onInputChange={handleInputChange}
            type="text"
            identity={"ongname"}
            label={"Nome da Organização"}
            name={"ongname"}
            example={"Nome da organização"}
          /> 

          <InputField
            onInputChange={handleInputChange}
            type="text"
            identity={"street"}
            label={"Rua"}
            name={"street"}
            example={"Rua onde a ONG é localizada"}
          />

          <InputField
            onInputChange={handleInputChange}
            type="text"
            identity={"bairro"}
            label={"Bairro"}
            name={"neighborhood"}
            example={"Bairro onde a ONG é localizada"}
          />

          <InputField
            onInputChange={handleInputChange}
            type="text"
            identity={"number"}
            label={"Número"}
            name={"number"}
            example={"Número do local"}
          />

          <div className="flex gap-4">
            <label>Estado/Cidade</label>
            <select onChange={(event => handleInputChange(event, 'state') )}>
      
            < OptionField defaultInfo={''} content={"Selecione"} />
            < OptionField value={'sp'} content={"São Paulo"} />
            < OptionField value={'mg'} content={"Minas"} />
            </select>
          </div>
        </details>

        <details>
          <summary className="cursor-pointer">Responsável</summary>

          <InputField
            onInputChange={handleInputChange}
            type={"text"}
            identity={"name"}
            label={"Nome"}
            name={"name"}
            example={'Nome do responsável'}
          />
          <InputField
            onInputChange={handleInputChange}
            type={"text"}
            identity={"cellphone"}
            label={"Telefone"}
            name={"cellphone"}
            example={'Telefone para contato'}
          />
          <InputField
            onInputChange={handleInputChange}
            type={"text"}
            identity={"email"}
            label={"Email"}
            name={"email"}
            example={"meuemail@email.com"}
            isEmailValid={exist}
            ref={inputRef}
          />
          
          <InputField
            onInputChange={handleInputChange}
            type={"text"}
            identity={"password"}
            label={"Senha"}
            name={"password"}
            example={"Digite sua senha"}
          />
        </details>   

        <button className="border border-black p-4 w-40 rounded-md mx-auto cursor-pointer hover:text-freesia transition duration-150" onClick={registerUser}>
          Cadastrar
        </button>
      </form>

 
    </main>
  )
}

export default register
