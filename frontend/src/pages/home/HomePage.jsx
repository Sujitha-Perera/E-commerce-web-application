import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../../components/Header";
import ProductsGrid from "./ProductsGrid";

const HomePage = ({ cart,loadCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const GetHomeData= async()=>{
      const response =await axios.get("/api/products")
      setProducts(response.data);

    };
    GetHomeData();

  }, []);

  // fetch('http://localhost:3000/api/products')
  //   .then((response)=>{
  //       return response.json()
  //     }).then((data)=>{
  //       console.log(data);
  //     })

  return (
    <>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
};

export default HomePage;
