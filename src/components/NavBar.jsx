import { Link } from 'react-router-dom'
import Carrito from './Carrito.jsx'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <div id="Titulo" className="navbar-title">
        E-Commerce TP 2
      </div>

      <div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li className="dropdown">
            <span className="dropdown-title">Productos ▾</span>

            <ul className="dropdown-menu">
              <li>
                <Link to="/productos">Todos</Link>
              </li>
              <li>
                <Link to="/category/categoria1">Categoría 1</Link>
              </li>
              <li>
                <Link to="/category/categoria2">Categoría 2</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>

      <div>
        <Carrito />
      </div>
    </nav>
  )
}
