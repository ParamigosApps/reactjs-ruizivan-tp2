import { useState } from 'react'
import ItemCount from './ItemCount'
import { useCarrito } from './CarritoContext'

export default function ItemDetail({ item }) {
  const { agregarAlCarrito } = useCarrito()
  const [cantidad, setCantidad] = useState(1)

  return (
    <div className="item-container">
      <h2>{item.title}</h2>
      <img
        src={item.img}
        alt={item.title}
        style={{ width: '200px', marginBottom: '1rem', borderRadius: '6px' }}
      />

      <p>Precio: ${item.price}</p>

      <ItemCount stock={10} initial={1} onChange={setCantidad} />

      <button onClick={() => agregarAlCarrito(item, cantidad)}>
        Agregar al carrito
      </button>
    </div>
  )
}
