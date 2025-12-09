import vaper1 from '../assets/img/vaper1.webp'
import vaper2 from '../assets/img/vaper2.webp'
import vaper3 from '../assets/img/vaper3.png'

export const products = [
  {
    id: '1',
    title: 'Elfbar 40K - Lush Gummy',
    price: 1000,
    category: 'categoria1',
    img: vaper1,
  },
  {
    id: '2',
    title: 'Elfbar 40K - Strawberry',
    price: 2000,
    category: 'categoria1',
    img: vaper2,
  },
  {
    id: '3',
    title: 'Elfbar 40K - Blue Razz',
    price: 3000,
    category: 'categoria2',
    img: vaper3,
  },
  {
    id: '4',
    title: 'Lost Mary 30K - Naranja',
    price: 2500,
    category: 'categoria1',
    img: vaper3,
  },
  {
    id: '5',
    title: 'Lost Mary 30K - Uva',
    price: 2500,
    category: 'categoria2',
    img: vaper3,
  },
]

// Simula una demora (requerido para la entrega)
export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(p => p.id === id))
    }, 500)
  })
}

export const getProductsByCategory = category => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.filter(p => p.category === category))
    }, 500)
  })
}
