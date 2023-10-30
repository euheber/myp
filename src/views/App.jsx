import HeroImage from "../../public/images/bannerHero"
import Card from "../components/card/Card"

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
        <div className="text-center mt-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis ab quae iusto voluptatum eum eaque architecto inventore illo! Corporis, unde! Aut soluta magni quos? Commodi labore quasi dolore cumque?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsa enim ad perferendis dicta, maxime nihil cumque laborum, dolorem dolore voluptatum reprehenderit? Asperiores illo, iusto impedit aut doloremque ad pariatur.
        </p>
        </div>


        <section className="w-full mt-10 flex items-center justify-center gap-2">
         <Card />
         <Card />
        </section>
      </main>
    </>
  )
}

export default App
