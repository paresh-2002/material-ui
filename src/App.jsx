import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar'
import React, { useEffect, useState } from 'react'
import Carts from './pages/Carts';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/users/Login';
import axios from 'axios'
import Signup from './components/users/Signup';

const category = ['laptops', 'home-decoration', 'mens-shoes', 'mens-watches', 'mobile-accessories']
export default function App() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [allProducts, setAllProducts] = useState([])

  const productsData = async () => {
    try {
      let res = await axios(`https://dummyjson.com/products/category/laptops`)
      let data = await res.data.products
      setLoading(false)
      setProducts(data)
    }
    catch (error) { 
      console.error("Error fetching  products:", error);
      setLoading(false);
    }
  }
  const allProductsData = async () => {
    try {
      const newCategories = await Promise.all(
        category.map(async (item) => {
          let res = await axios(`https://dummyjson.com/products/category/${item}`);
          return res.data.products;
        })
      );
      setAllProducts(newCategories.flat());
      setLoading(false);
    } catch (error) {
      console.error("Error fetching all products:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true)
    productsData()
    allProductsData()
  }, [])

  return (
    <>
      <Router>
        <Container maxWidth="xl">
          <Navbar />
          <Box sx={{ my: 4 }}>
            <Routes>
              <Route path='/' element={<Carts loading={loading} products={products} />} />
              <Route path='/products' element={<Carts loading={loading} products={allProducts} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </>
  );
}