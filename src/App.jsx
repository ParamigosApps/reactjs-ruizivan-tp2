import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'

import DetalleProducto from './components/DetalleProducto.jsx'
import ListaProductos from './components/ListaProductos.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/productos" element={<DetalleProducto />} />
        <Route path="/category/:categoryId" element={<DetalleProducto />} />
        <Route path="/item/:itemId" element={<ListaProductos />} />
        <Route path="/contacto" element={<h2>Contacto</h2>} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
