// src/pages/Home.jsx
import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import BestSelling from '../components/BestSelling';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';

const Home = () => {
  let [products,setProducts]=useState([])

const getProducts=async()=>{
let myProducts= await axios.get("http://localhost:3000/")
console.log(myProducts.data.products);
setProducts(myProducts.data.products)

}

useEffect(()=>{
getProducts();
},[])


  return (
    <div>
      <Banner />
      <Categories />
      <BestSelling />
      <Products products={products} />
      <Footer/>
    </div>
  );
};

export default Home;
