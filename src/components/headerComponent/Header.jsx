import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

function Header() {
  const [isLoged, setLogin] = useState(false);
  const location = useLocation()
  const fetchData = async () => { 
    const token = localStorage.getItem("token");
  
    try {
      const response = await fetch("http://localhost:3000/authenticate", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({token: token}),
      });
  
      const jsonData = await response.json();
  
      if (!response.ok) {
        console.log(response.status);
        console.log(jsonData.error);
        setLogin(false);
        throw new Error(`${response.status}`);
      }
  
      setLogin(true);
      console.log(jsonData);
    } catch (e) {
      if (e instanceof TypeError) {
        console.log('Erro de conexão:', e.message);
      } else {
        console.log('Token inválido:', e.message);
      }
    }
  };
  
  // Chame fetchData diretamente quando necessário
  // Isso garantirá que a função seja executada imediatamente e atualize o estado
  useEffect(() => {
    fetchData();
  }, [location.pathname]);
  return (
    <>
      <header className=" bg-blue-green px-5 rounded-t-[10px]">
        <div className="flex justify-between items-center py-2">
          <Link to="/" className="uppercase text-1d1e20 text-2xl">
            my<span className="text-freesia">p</span>
          </Link>
          <nav>
            <ul className="flex gap-5 items-center">
              <li>
                <select
                  name="city"
                  id=""
                  className="pr-1 border border-blue-green bg-blue-green outline-0"
                >
                  <option value="cosmopolis">Cosmópolis</option>
                  <option value="campinas">Campinas</option>
                </select>
              </li>
              <li>
                
              </li>
              <li>
                <Link to="/cadastro"  className="hover:text-white transition duration-150">
                  Cadastre-se
                </Link>
              </li>
              <li>
                {
                  isLoged ? <Link to={'/login'} className="hover:text-white transtion duration-150">Meu perfil</Link> : <Link to={'/login'} className="hover:text-white transtion duration-150">Fazer login</Link>
                }
                 
              </li>
              <li>
                <a href="/"  className="hover:text-white transition duration-150">
                 Ongs
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
