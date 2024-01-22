import { useState } from "react"
import InputField from "../components/Inputs/InputField"
import Button from "../components/composables/Button"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState({ email: "", password: "" })

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const logIn = async (event) => {
    event.preventDefault()
    try {
      const request = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers:  { "Content-type": "application/json" },
        body: JSON.stringify(user)
      })

      if (request.ok) {
        const data = await request.json()
        localStorage.setItem("token", data.token)
        navigate("/")
      }
    } catch (error) {
      console.error('Erro na solicitação POST:', error);
    } 
  }

  return (
    <>
      <main className="mt-10 px-5 pb-2">
        <h1 className="text-2xl">Faça login</h1>

        <form className="mt-10 flex flex-col gap-5">
          <InputField
            type={"text"}
            id={"email"}
            name={"email"}
            example={"Digite seu email"}
            label={"Email"}
            onInputChange={handleInputChange}
          />
          <InputField
            type={"text"}
            id={"password"}
            name={"password"}
            example={"Digite sua senha"}
            label={"Senha"}
            onInputChange={handleInputChange}
          />

          <Button
            styles={
              "border border-black p-4 w-40 rounded-md mx-auto cursor-pointer hover:text-freesia transition duration-150"
            }
            action={logIn}
          >
            Login
          </Button>
        </form>
      </main>
    </>
  )
}

export default Login
