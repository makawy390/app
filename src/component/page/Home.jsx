import React from 'react'
import useTitle from '../../changeDocTitle/docTitle'
// import { useSelector } from 'react-redux';
import './home.css'
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import SimpleProducts from './SimpleProducts';
const Home = () => {
  useTitle('Home');
  const fullName = sessionStorage.getItem("full name")
  const navigate = useNavigate();
  return (
    <div className='home-page-plus'>
    
    <div className='home'>
      <h2>Hello <span>{fullName}</span>  from  <span>App Store</span>  </h2>
    </div>
    <SimpleProducts />
<div className='btn-all'>
      <Button  onClick={()=> navigate("/all-products")}  label="Show All Products"  severity="secondary" raised />

</div>
    </div>
  )
}

export default Home