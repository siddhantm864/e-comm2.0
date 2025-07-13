import styled from "styled-components";
import Navbar from "../components/navbar";
import slider1 from "../assets/slider1.jpg";
import { FavoriteBorder, Margin } from "@mui/icons-material";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
`;

const ProductContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid lightgray;
  overflow-y: scroll; /* Enables vertical scrolling */
  height: 100%; /* Ensures the height matches the container */
`;

const ProductTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const ProductDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ProductWish = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
`;

const AddToCartButton = styled.button`
  margin-left: 20px;
  padding: 10px;
  background-color: rgb(189, 191, 202);
  width: 20%;
  cursor: pointer;
  color: white;
  border: none;
  font-weight: 600;
`;

const BuyButton = styled.button`
  margin-left: 20px;
  padding: 10px;
  background-color: rgb(228, 138, 65);
  width: 20%;
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

const ProductAbout = styled.div``;
const backendURI = process.env.REACT_APP_BACKEND_URI;

const Product = ({}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${backendURI}/api/products/${id}`);
        console.log("Response",backendURI)
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        setError("Unable to fetch product");
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>No Product Found</div>;
  return (
    <Container>
      <Navbar />
      <ProductContainer>
        <ImageContainer>
          {/* <Share> share item</Share> */}
          <ProductImage src={product.thumbnail} alt="Product Image" />
        </ImageContainer>
        {/* <ProductImage src="https://unsplash.com/photos/a-large-body-of-water-with-a-city-in-the-background-x9tnkb84cTM" alt="Product Image" /> */}
        {/* <ProductImage></ProductImage> */}
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>${product.price}</ProductPrice>
          <ProductWish>
            <FavoriteBorder
              style={{ marginLeft: "10px", padding: "5px", cursor: "pointer" }}
            />
            <AddToCartButton>Add to Cart</AddToCartButton>
            <BuyButton>Buy Now</BuyButton>
          </ProductWish>
          <ProductAbout>
            <h3>Customer Reviews</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis facilis pariatur nihil deleniti repellendus nulla vero
              quo? Quam, molestiae ex qui itaque commodi dolore praesentium
              inventore fugit velit saepe, cumque vitae repudiandae eius
              dignissimos? Porro odit ut modi deserunt, optio tenetur, dolor
              necessitatibus, officia tempore dignissimos obcaecati culpa
              accusantium minima.
            </p>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis facilis pariatur nihil deleniti repellendus nulla vero
              quo? Quam, molestiae ex qui itaque commodi dolore praesentium
              inventore fugit velit saepe, cumque vitae repudiandae eius
              dignissimos? Porro odit ut modi deserunt, optio tenetur, dolor
              necessitatibus, officia tempore dignissimos obcaecati culpa
              accusantium minima.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis facilis pariatur nihil deleniti repellendus nulla vero
              quo? Quam, molestiae ex qui itaque commodi dolore praesentium
              inventore fugit velit saepe, cumque vitae repudiandae eius
              dignissimos? Porro odit ut modi deserunt, optio tenetur, dolor
              necessitatibus, officia tempore dignissimos obcaecati culpa
              accusantium minima.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis facilis pariatur nihil deleniti repellendus nulla vero
              quo? Quam, molestiae ex qui itaque commodi dolore praesentium
              inventore fugit velit saepe, cumque vitae repudiandae eius
              dignissimos? Porro odit ut modi deserunt, optio tenetur, dolor
              necessitatibus, officia tempore dignissimos obcaecati culpa
              accusantium minima.
            </p>
          </ProductAbout>
        </ProductInfo>
      </ProductContainer>
      <Footer />
    </Container>
  );
};

export default Product;
