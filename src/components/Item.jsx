import { Link } from 'react-router-dom'

export default function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.img} alt={product.title} className="item-img" />

      <h3>{product.title}</h3>
      <p>Precio: ${product.price}</p>

      <Link to={`/item/${product.id}`} className="item-link">
        Ver detalle
      </Link>
    </div>
  )
}
