import React from 'react'
import useFetch from '../books/fetchData/fetch data/fetchData';
import url_books from '../api/api.book';
import { Grid, CardContent, Typography, CardActions, Stack } from '@mui/material';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const SimpleProducts = () => {
  const booksData = useFetch(`${url_books}/api/books` , 1 , 6);
  const navigate = useNavigate();
 
const filtrationBooks = booksData?.map((product)=>(
<Grid item lg={3} md={4} sm={6} xs={12}  key={product._id}>
      <CardContent>
        <Image src={product.image} alt="Image"  preview />
        <Typography margin='10px 0' variant="h6" component="h3">
          {product.title}
        </Typography>
       <div className="flex-state">
         <Typography variant="subtitle1"  color="text.secondary">
          {product.price} $
        </Typography>   
       </div>
      </CardContent>
      <CardActions>
      <Stack spacing={2} direction="column">
        <Button label="View" severity="secondary" size="small" raised onClick={()=> navigate(`/view/${product._id}`)} />
    
 </Stack>
      </CardActions>
    </Grid>
  ))
  return (
    <div>
     <h3>Most searched devices</h3>
     <Grid container>
      {filtrationBooks}
     </Grid>
    </div>
  );
}

export default SimpleProducts