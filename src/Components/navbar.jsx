import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"
import "../css/Navbar.css"

export function Navbar() {
    return (
        <>
        <header>
        <nav className="navbar_login-content">
          <p className="paragraph">
          <FontAwesomeIcon className="icon" icon={faCircleCheck} />
             Wise CX
          </p>

          <button className="main_content-button">
          <FontAwesomeIcon className="icon" icon={faArrowRightToBracket} />
            Iniciar sesion
          </button>
        </nav>
      </header>
      </>
    )
}