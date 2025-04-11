import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Login() {
    const [loading, setLoading] = useState(false)
    function addData(e) {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }} maxWidth={'sm'}>
            <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
                    Login
                </Typography>
                <form >
                    <Box sx={{ mb: 2 }}>
                        <TextField fullWidth label="UserName" id="username" />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField fullWidth label="Password" id="password" />
                    </Box>
                    <Button loading={loading} variant="outlined" loadingPosition="center" onClick={addData}>
                        Submit
                    </Button>
                </form>
            </Container>
        </Box>
    )
}

export default Login