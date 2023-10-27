import FemaleTag from "../tags/FemaleTag"
import MaleTag from "../tags/MaleTag"
import Vaccine from "../tags/vaccineTag"

function Card() {
  return (
    <div className="w-[500px] h-44 flex  border-1d1e20">

    <div className="w-[400px]">
      <img src="/images/gato.jpg" alt="" className="w-full h-full  rounded-l-md"/>
    </div>
      <div className="w-[100px] bg-e5e5e5 grid grid-cols-2 grid-rows-5 place-items-center gap-y-4 pt-5">
        <FemaleTag/>
        <MaleTag/>
        <Vaccine/>
      </div>
    </div>
  )
}

export default Card
