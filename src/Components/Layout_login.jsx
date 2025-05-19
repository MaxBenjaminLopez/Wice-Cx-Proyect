import "../css/Layout-login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"

export function Navbar_login() {

  return (
    <>
      <header>
        <nav className="navbar_login--content">
          <p className="paragraph">
          <FontAwesomeIcon className="icon" icon={faCircleCheck} />
             Wise CX
          </p>

          <button className="button">
          <FontAwesomeIcon className="icon" icon={faArrowRightToBracket} />
            Iniciar sesion
          </button>
        </nav>
      </header>

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