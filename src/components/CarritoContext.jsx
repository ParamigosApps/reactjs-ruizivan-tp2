import { createContext, useState, useContext } from 'react'

const CarritoContext = createContext()

export function useCarrito() {
  return useContext(CarritoContext)
}

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (item, cantidad) => {
    const nuevo = { ...item, cantidad }
    setCarrito([...carrito, nuevo])
  }

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  )
}
