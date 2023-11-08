import ArrowDown from "../assets/icons/arrowdown"
function root(){ 
    return (
        <>
         <section className=" mx-auto max-w-4xl mt-10 min-h-[400px] flex items-center px-5">
        <div className=" max-w-xl">
          <h1 className="text-3xl">
            Seu parceiro pode estar aqui
            <span className="text-freesia font-bold text-4xl">.</span>
          </h1>
          <p className="mt-2 font-lora">
            Navegue pela nossa plataforma e descubra histórias de pets
            disponíveis para adoção.
          </p>

          <button className="border-black border text-black rounded-lg p-2 mt-10 hover:text-freesia transition duration-300">
            Comece por aqui
          </button>
        </div>

        <img
          src="/images/profile.jpg"
          alt=""
          className="w-[250px] rounded-full"
        />
      </section>

      <main className="mt-10 px-5 bg-freesia pt-5 ">
        <h1 className="text-7xl font-bold uppercase text-center tracking-widest text-1d1e20">
          meet your pawtner
        </h1>
        <p className="text-center mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum
          sit corporis pariatur? Voluptas, autem facilis, beatae fugit fugiat
          ipsum nemo possimus nihil expedita, libero dolor fuga eveniet
          blanditiis cum.
        </p>
        <ArrowDown classes={"mx-auto mt-10 text-2B5C9B"} />
      </main>

      <section>
        <div className="min-h-[500px] bg-white grid grid-cols-2 grid-rows-2 place-items-center">
          <div className=" w-[350px] min-h-[200px] bg-blue"></div>
          <div className=" w-[350px] min-h-[200px] bg-grey"></div>
          <div className=" w-[350px] min-h-[200px] bg-grey"></div>
          <div className=" w-[350px] min-h-[200px] bg-grey"></div>
        </div>

        <a href="/" className="hover:text-freesia transtion duration-150 ml-[670px]">Veja mais</a>
      </section></>
    )
}


export default root