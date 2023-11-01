import HeroImage from "../../public/images/bannerHero"
import ArrowDown from "../assets/icons/arrowdown.jsx"

function App() {
  return (
    <>
      <section className=" mx-auto max-w-4xl mt-10 min-h-[400px] flex items-center">
        <div className=" max-w-xl">
          <h1 className="text-3xl">
            <span className="text-f2c94d">Miaus</span> parceiros podem estar
            aqui<span className="text-f2c94d font-bold text-4xl">.</span>
          </h1>
          <p className="mt-2 font-lora">
            Navegue pela nossa plataforma e descubra histórias de pets
            disponíveis para adoção.
          </p>

          <button className="border-1d1e20 border text-f2c94d rounded-lg p-2 mt-10 hover:text-1d1e20 transition duration-300">
            Comece por aqui
          </button>
        </div>

        <HeroImage />
      </section>


      <main className="mt-10">
        <h1 className="text-7xl font-bold uppercase text-center tracking-widest text-1d1e20">meet your pawtner</h1>
        <p className="text-center mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum sit corporis pariatur? Voluptas, autem facilis, beatae fugit fugiat ipsum nemo possimus nihil expedita, libero dolor fuga eveniet blanditiis cum.
        </p>

        <ArrowDown classes={'mx-auto mt-10'}/>
      </main>
    </>
  )
}

export default App
