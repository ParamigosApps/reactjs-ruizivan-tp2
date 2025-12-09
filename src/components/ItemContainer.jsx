import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../data/products'
import ItemList from './ItemList'

function DetalleProducto() {
  const [items, setItems] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId).then(res => setItems(res))
    } else {
      getProducts().then(res => setItems(res))
    }
  }, [categoryId])

  return (
    <div>
      <h1>Catálogo</h1>
      <ItemList items={items} />
    </div>
  )
}

export default DetalleProducto
