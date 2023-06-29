import React, { useEffect, useState } from 'react';
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Product = () => {
    const dispatch = useDispatch();
    const { data, status} = useSelector((state)=> state.product);
    const [products, setProducts] =  useState([])

    useEffect(()=>{
        dispatch(fetchProducts());

        // const fetchProducts = async ()=>{
        //     const res = await fetch("https://fakestoreapi.com/products");
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // }
        // fetch('https://fakestoreapi.com/products')
        // .then(res=>res.json())
        // .then(data=>setProducts(data)) ; 
        // fetchProducts();

        
    }, [])

    if(status === STATUSES.LOADING){
        return <h2>Loading.......</h2>
    }
    if(status === STATUSES.ERROR){
        return <h2>Something went wrong</h2>
    }

    // const handleAdd = (product)=>{
    //     dispatch(add(product));
    // }
  return (
    <div className='productsWrapper'>
        {
           data?.map(product =>(
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => dispatch(add(product))} className='btn'>Add To Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Product

