import React from 'react'
import MediaCard from '../components/Cart'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import AlertDialog from '../components/AlertDialog'


function Carts({ products, loading }) {


    return (
        <>
            <Stack sx={{ my: 4, }} direction={'row'} alignItems="center" justifyContent="space-between" >
                <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                    Products
                </Typography>
                <AlertDialog sx={{ color: 'white', cursor: 'pointer', }} />
            </Stack>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} >
                {
                    products.map((item) => (
                        <Grid key={item.id} size={{ xs: 2, sm: 4, md: 4 }} >
                            <MediaCard item={item} loading={loading} />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default Carts