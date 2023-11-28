import InputField from "../components/Inputs/InputField"
import Button from "../components/composables/button"
function login(){ 
    return (
        <>
            <main className="mt-10 px-5 pb-2">
                <h1 className="text-2xl">Faça login</h1>

                <form  className="mt-10 flex flex-col gap-5">
                     <InputField type={"text"} id={"email"} name={"email"} example={"Digite seu email"} label={"Email"}/> 
                    <InputField type={"text"} id={"password"} name={"password"} example={"Digite sua senha"} label={"Senha"}/> 

                    <Button styles={"border border-black p-4 w-40 rounded-md mx-auto cursor-pointer hover:text-freesia transition duration-150"}>Login</Button>
                </form>
            </main>
        </>
    )
}

export default login