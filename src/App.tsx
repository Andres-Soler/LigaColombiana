import { BrowserRouter as Router, Route, Routes, Link} from 'react-router';

import Home from "./home/index.tsx";
import Original from "./original/index.tsx";
import Favoritos from "./favoritos/index.tsx";
import Equipo from "./equipo/index.tsx";
import Informativa from "./informativa/index.tsx";
import Usuario from "./usuario/index.tsx";
import './App.css'

function App() {

  return (
    <>
    <Router>

        <Link to="/"><p>Home</p></Link>
        <Link to="/favoritos"><p>Favoritos</p></Link>
        <Link to="/original"><p>Original</p></Link>
        <Link to="/informativa"><p>Informativa</p></Link>
        <Link to="/usuario"><p>Usuario</p></Link>
        <Link to="/equipo"><p>Equipo</p></Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/original" element={<Original />} />
        <Route path="/informativa" element={<Informativa />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/equipo" element={<Equipo />} />
      </Routes>
    </Router>
    </>    
  )
}

export default App
