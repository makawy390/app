import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { Image } from 'primereact/image';
import '../css/books.css'
import { Fragment } from 'react';
import { deleteCart } from '../../../redux/reducer/createSliceProducts';
const ShoppingCart = () => {
 const cart = useSelector(state => state.cart.cart);
 const sess = sessionStorage.getItem("cart");
 console.log(sess);
 const dispatch = useDispatch();
const filtrationCart = cart.map((cart)=>(
        <Fragment key={cart._id}>
        <Grid item lg={3} md={4} xs={12}>
        <Image src={cart.image} alt="Image" preview />
              </Grid>
  <Grid item lg={9} md={8} xs={12}>
    <div className="card-view">
            <h2>  {cart.title}</h2>
      <p>  {cart.description} </p>
       <p> quantity : {cart.quantity} </p>
      <span> {cart.price} $ </span>
      <span  style={{textDecoration: "line-through" , paddingLeft : "20px"}}> {`${cart.price + 150}`} $ </span> 
      <br />
      <button onClick={()=> dispatch(deleteCart(cart))}>remove</button>
    </div>
  </Grid>
        </Fragment>
))
  return (
    <div className='cart'>
      <h2 className='text-center mb-5 text-primary' >Your Shopping Cart</h2>
      <Grid container spacing={2}>
        {filtrationCart}
      </Grid>
    </div>
  )
}
export default ShoppingCart