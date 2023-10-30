import FemaleTag from "../tags/FemaleTag"
import MaleTag from "../tags/MaleTag"
import Vaccine from "../tags/vaccineTag"

function Card() {
  return (
    <div className="w-[560px] h-44 flex">

      <div className="rounded-md w-44">
        <img
          src="/images/luna.jpeg"
          alt=""
          className="w-full h-full rounded-l-lg"
        />
      </div>

      <div className="w-[300px] px-2 border border-1d1e20 border-l-0 border-r-0">
        <h1 className="font-serrat text-2xl">Luna Fatfingers</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quia enim
          cupiditate cum, quibusdam mollitia inventore nisi, fugiat aut
          laboriosam nemo officia delectus autem maxime beatae. Beatae debitis
          expedita omnis.
        </p>
      </div>

      <div className="w-[84px] bg-f2c94d  border-y border-r grid grid-cols-2 grid-rows-5 px-2 pt-2 gap-1 gap-y-10">
        <FemaleTag />
        <Vaccine />
        <Vaccine />
        <Vaccine />
        <Vaccine />
      </div>
    </div>
  )
}

export default Card
