import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../data/products'
import ItemList from './ItemList'

export default function DetalleProducto() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')

  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId).then(res => setItems(res))
    } else {
      getProducts().then(res => setItems(res))
    }
  }, [categoryId])

  const itemsFiltrados = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="itemlist-container">
      <h2>Productos</h2>

      {/* BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />

      <ItemList items={itemsFiltrados} />
    </div>
  )
}
