import './css/index.css'
import { Navbar_login } from './Components/Layout_login.jsx'
import { Generator } from './Components/Generador.jsx'
import { Routes, Route } from "react-router";
import { Historico } from './Components/Historico.jsx';
import { Administracion } from './Components/Administracion.jsx';

function App() {

  return (
    <Routes>  
      {/*<Navbar_login /> <---------- login navbar mostrar cuando hagamos el login recien*/}
      <Route path="/" element={<Navbar_login />} />
      <Route path="/Generador" element={<Generator />} />
      <Route path="/Historico" element={<Historico />} />
      <Route path="/Administracion" element={<Administracion />} />
    </Routes>
  )
}

export default App