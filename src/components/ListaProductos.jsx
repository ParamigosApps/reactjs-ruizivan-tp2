import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import ItemDetail from './ItemDetail'

function ListaProductos() {
  const [item, setItem] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    getProductById(itemId).then(res => setItem(res))
  }, [itemId])

  return <div>{item ? <ItemDetail item={item} /> : <p>Cargando...</p>}</div>
}

export default ListaProductos
