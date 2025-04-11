import { Box, Button, Checkbox, Container, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const label = { inputProps: { 'aria-label': 'Checkbox demo' }, label: 'I agree to the terms and conditions' };
function Signup() {
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
                    Signup
                </Typography>
                <form >
                    <Box sx={{ mb: 2 }}>
                        <TextField fullWidth label="UserName" id="username" />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField fullWidth label="Password" id="password" />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group">
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </Box>
                    <Checkbox {...label} />
                    <Box fullWidth sx={{ textAlign: 'center' }}>
                        <Button loading={loading} variant="outlined" loadingPosition="center" onClick={addData}>
                            Submit
                        </Button>
                    </Box>
                </form>
            </Container>
        </Box>
    )
}

export default Signup