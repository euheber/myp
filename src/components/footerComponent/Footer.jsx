import Instagram from "../../assets/icons/instagram"

function footer() {
  return (
    <footer className="p-5 bg-blue-green flex items-center justify-between rounded-b-lg">
      <ul className="w-80">
        <li>
          <a href="/" className="hover:text-white transition duration-150">
            Saiba mais
          </a>
        </li>
        <li>
          <a href="/" className="hover:text-white transition duration-150">
            Quem pode se cadastrar
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/">
            <Instagram />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default footer
