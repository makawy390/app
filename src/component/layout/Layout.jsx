import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Container } from '@mui/material';
import { Suspense } from 'react';
import Spinner from './Spinner';

const Layout = () => {
 
  return (
   <>
       

   <Navbar />
    {/* <Suspense fallback={<Spinner />}><Suspense /> */}
    <div>
      <Suspense fallback={<Spinner />}>
   <Container>
      <Outlet />
   </Container>
    </Suspense>
    </div>
   <Footer />
   </>
  )
}

export default Layout;