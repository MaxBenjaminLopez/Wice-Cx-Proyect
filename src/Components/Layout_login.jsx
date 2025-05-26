import "../css/Navbar-login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { Navbar } from './navbar'
import { Link } from "react-router"

export function Navbar_login() {

  return (
    <>
      <Navbar/>
      <main className="main_content-box">
        <h1>Bienvenidos a Wise CX</h1>

        <h2> Para acceder al sistema de generación de propuestas, por favor inicia sesión.

        </h2>

        <button className="main_content-button">
        <FontAwesomeIcon className="icon" icon={faArrowRightToBracket} />
          <Link className="link" to="/Generador">Iniciar sesion</Link>
        </button>
      </main>
    </>
  )
}