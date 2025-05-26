import "../css/Layout-Generator.css";
import { NavLink } from "react-router";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Links() {
  return (
    <>
      <section className="Layout_Generator-content">
        <NavLink className={({ isActive }) => (isActive ? "link-activo" : "Layout_Generator-button")} to="/Generador">
            <FontAwesomeIcon icon={faFileLines} className="icon" />
            Generador
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-activo" : "Layout_Generator-button")} to="/Historico">
            <FontAwesomeIcon icon={faClock} className="icon" />
            Historico
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? "link-activo" : "Layout_Generator-button")} to="/Administracion">
            <FontAwesomeIcon icon={faGear} className="icon" />
            Panel de Administracion
        </NavLink>
      </section>
    </>
  );
}
