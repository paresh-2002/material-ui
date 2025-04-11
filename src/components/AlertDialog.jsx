import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';;
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const categories = ['laptops', 'home-decoration', 'mens-shoes', 'mens-watches', 'mobile-accessories']
export default function AlertDialog() {
    const [open, setOpen] = useState(false);

    const [category, setCategory] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [loading, setLoading] = useState(false)
    function addData(e) {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen} sx={{ color: 'white', background: 'green' }} >
                <AddIcon />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {"Add Products"}
                    <Button onClick={handleClose} sx={{ textAlign: 'end' }}>
                        <CloseIcon />
                    </Button>
                </DialogTitle>
                <DialogContent>
                    <form >
                        <Box sx={{ my: 2 }}>
                            <TextField fullWidth label="Title" id="title" />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <TextField fullWidth label="Price" id="price" type='number' />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <TextField fullWidth label="Rating" id="rating" type='number' />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <TextField fullWidth label="Date" id="date" type='date' />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <TextField fullWidth label="Description" id="description" />
                        </Box>
                        <FormControl fullWidth sx={{ textAlign: 'start', mb: 2 }}>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Category"
                                onChange={handleChange}
                            >
                                {
                                    categories.map((item) => (
                                        <MenuItem key={item} value={item}>{item}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>

                        <Box sx={{ textAlign: 'center' }}>
                            <Button loading={loading} variant="outlined" loadingPosition="center" onClick={addData}>
                                Submit
                            </Button>
                        </Box>
                    </form>
                </DialogContent>

            </Dialog>
        </React.Fragment>
    );
}