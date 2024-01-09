import React from 'react'
import {Container, Typography} from '@mui/material'
import './footer.css';

const Footer = () => {
  return (
    <footer>
<Container>
     <Typography variant="subtitle1" component="h2">
    <Typography variant='subtitle2' component='span'>App store</Typography>  &copy; 2023 Mohamed Hesham. All rights reserved
</Typography>

</Container>
    </footer>
  )
}

export default Footer