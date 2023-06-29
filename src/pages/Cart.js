import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch();
  return (
    <div>
    <h3 style={{textAlign:"center"}}>Cart</h3>
    <div className='cartwrapper'>
      {
          products.map(product => (
            <div className="cartCards" key={product.id}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button onClick={()=> dispatch(remove(product.id))} className="btn">Remove</button>
            </div>
          ))
      }
    </div>
    </div>
  )
}

export default Cart