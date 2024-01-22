import { Route, Routes } from "react-router-dom"
import Header from "./components/headerComponent/Header"
import Footer from "./components/footerComponent/Footer"
import Root from "./views/Root.jsx"
import Login from "./views/Login"
import Register from "./views/Register"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
