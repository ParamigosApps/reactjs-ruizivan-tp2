import Item from './Item.jsx'

export default function ItemList({ items }) {
  return (
    <div className="itemlist-grid">
      {items.map(item => (
        <Item key={item.id} product={item} />
      ))}
    </div>
  )
}
