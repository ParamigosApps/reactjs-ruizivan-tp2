import { useState } from 'react'

export default function ItemCount({ stock, initial, onChange }) {
  const [count, setCount] = useState(initial)

  const sumar = () => {
    if (count < stock) {
      const nuevo = count + 1
      setCount(nuevo)
      if (onChange) onChange(nuevo)
    }
  }

  const restar = () => {
    if (count > 1) {
      const nuevo = count - 1
      setCount(nuevo)
      if (onChange) onChange(nuevo)
    }
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={restar}>-</button>
      <span style={{ margin: '0 1rem' }}>{count}</span>
      <button onClick={sumar}>+</button>
    </div>
  )
}
