import { useCarrito } from './CarritoContext'
export default function Carrito() {
  const { carrito } = useCarrito()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
      <span role="img" aria-label="Carrito">
        🛒
      </span>
      <span>{carrito.length}</span>
    </div>
  )
}
