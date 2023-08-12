import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {
  return (
    <div className='row'>
     <div className='col-md-4 offset-md-4'>
        <img src={item.img} className='img-fluid'alt={item.title}/>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p> $ {item.price}</p>
        <p> Cantidad: {item.stock}</p>
     </div>
     <div>
      <ItemCount stockItems={10}/>
     </div>
    </div>
  )
}

export default ItemDetail
