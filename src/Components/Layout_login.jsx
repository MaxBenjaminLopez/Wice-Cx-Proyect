import "../css/Layout-login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { Navbar } from './navbar'

export function Navbar_login() {

  return (
    <>
      <Navbar/>
      <main className="main_content--box">
        <h1>Bienvenidos a Wise CX</h1>

        <h2> Para acceder al sistema de generación de propuestas, por favor inicia sesión.

        </h2>

        <button className="button">
        <FontAwesomeIcon className="icon" icon={faArrowRightToBracket} />
          Iniciar sesion
        </button>
      </main>
    </>
  )
}