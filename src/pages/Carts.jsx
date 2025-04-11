import React from 'react'
import MediaCard from '../components/Cart'
import { Box, Grid, Typography } from '@mui/material'


function Carts({products, loading}) {
    

    return (
        <>
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                Products
            </Typography>
                
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map((item) => (
                                <Grid key={item.id} size={{ xs: 2, sm: 4, md: 4 }} >
                                    <MediaCard item={item} loading={loading}/>
                                </Grid>
                            ))
                        }
                    </Grid>
        </>
    )
}

export default Carts