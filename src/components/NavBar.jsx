// src/components/NavBar.jsx
import Carrito from './Carrito.jsx'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <div id="Titulo" className="navbar-title">
        Tienda TP1
      </div>

      <div>
        <ul className="navbar-links">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
      <div>
        <Carrito />
      </div>
    </nav>
  )
}
