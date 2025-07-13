import { FavoriteBorder } from "@mui/icons-material";
import Navbar from "..";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import productData from "../data/product.data.json";
const backendURI=process.env.REACT_APP_BACKEND_URI

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
  // height: 20vh;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 2px solid lightgray;
  min-height: 350px;
  max-height: 450px;
  width: 18.5%;
  box-sizing: border-box;
  overflow: hidden;
  background: #fff;
`;

const ImageContainer = styled.div`
  height: 55%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ProductInfo = styled.div`
  height: 45%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 5px;
  background: #fff;
  box-sizing: border-box;
  justify-content: space-between;
  overflow: hidden;
`;

const ProductTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: #333;
  margin: 8px 0 4px 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #666;
  margin: 0 0 8px 0;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Show max 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
`;

const ProductWish = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
  width: 100%;
`;

const WishButton = styled.button`
  padding: 5px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  width: 40%;
  background: #fff;
`;

// ...rest of your Products component remains the same
const ProductCard = ({cat}) => {
  console.log("category",cat)
  const [products,setProducts]=useState([])
  useEffect(()=>{
    const getProducts=async()=>{
      try{
        const res=await axios.get(
          cat
          ?`${backendURI}/api/products?category=${cat}`
          :`${backendURI}/api/products`
        )
        setProducts(res.data)
        console.log("Response",res)
      }catch(error){
        console.log("error while fetching products...")
      }
    }
    getProducts()
  },[cat])
  return (
    <Container>
      {products.map((e) => (     
        <ProductContainer key={e._id}>
          <ImageContainer>
            <Link to={`/product/${e._id}`}>
              <Image src={e.thumbnail} alt="loading" />
            </Link>
          </ImageContainer>
          <ProductInfo>
            <ProductTitle>{e.title} </ProductTitle>
            <ProductDescription>{e.description}</ProductDescription>
            <ProductPrice>{e.price}</ProductPrice>
            <ProductWish>
              <FavoriteBorder style={{ padding: "5px", cursor: "pointer" }} />
              <WishButton style={{ backgroundColor: "light-yellow" }}>
                Add to Cart
              </WishButton>
              <WishButton style={{ backgroundColor: "orange" }}>
                Buy Now
              </WishButton>
            </ProductWish>
          </ProductInfo>
        </ProductContainer>
      ))}
    </Container>
  );
};

export default ProductCard;
