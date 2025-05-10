import { FavoriteBorder } from "@mui/icons-material";
import Navbar from "./navbar";
import styled from "styled-components";

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
    height: 55vh;
    width: 18.5%;
    box-sizing: border-box;
    overflow:hidden;
`;
const ImageContainer = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;  
    justify-content: center;
    align-items: center;
    height: 55%;
`;
const Image = styled.img`
    padding: 5x; 
    object-fit: cover;
    width: 100%;
    height: 100%;
`;
const ProductInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 5px;
    height: 40%;
    width: 100%;
    // box-sizing: border-box;
`;
const ProductTitle = styled.h1`
    font-size: 30px;
    font-weight: 600;
    // margin-bottom: 5px;
    color: #333;

`;
const ProductDescription = styled.p`
    font-size: 15px;
    font-weight: 400;
    // margin-bottom: 5px;
    color: #666;
`;
const ProductPrice = styled.span`
    font-size: 20px;
    font-weight: 600;
    // margin-bottom: 10px;
    color: #333;
`;
const ProductWish = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin:10px 0px;
    width: 100%;
`;
const WishButton = styled.button`
    padding: 10px;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    width: 50%;
`;


const Products = () => {
    return(
        <Container>
            <ProductContainer>
                <ImageContainer>
                    <Image src="https://images.unsplash.com/photo-1734364269335-d6f2913ac643?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="loading"/>
                </ImageContainer>
                <ProductInfo>
                    <ProductTitle>US PoloShirt</ProductTitle>
                    <ProductDescription>cotton mix shirt</ProductDescription>
                    <ProductPrice>20</ProductPrice>
                    <ProductWish>
                        <FavoriteBorder style={{padding:"5px", cursor:"pointer"}}/>
                        <WishButton style={{backgroundColor:"yellow"}}>Add to Cart</WishButton>
                        <WishButton style={{backgroundColor:"orange"}}>Buy Now</WishButton>
                    </ProductWish>
                </ProductInfo>
            </ProductContainer>

            <ProductContainer>
                <ImageContainer>
                    <Image src="https://images.unsplash.com/photo-1734364269335-d6f2913ac643?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="loading"/>
                </ImageContainer>
                <ProductInfo>
                    <ProductTitle>US PoloShirt</ProductTitle>
                    <ProductDescription>cotton mix shirt</ProductDescription>
                    <ProductPrice>20</ProductPrice>
                    <ProductWish>
                        <FavoriteBorder style={{padding:"5px", cursor:"pointer"}}/>
                        <WishButton style={{backgroundColor:"yellow"}}>Add to Cart</WishButton>
                        <WishButton style={{backgroundColor:"orange"}}>Buy Now</WishButton>
                    </ProductWish>
                </ProductInfo>
            </ProductContainer>
            <ProductContainer>
                <ImageContainer>
                    <Image src="https://images.unsplash.com/photo-1734364269335-d6f2913ac643?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="loading"/>
                </ImageContainer>
                <ProductInfo>
                    <ProductTitle>US PoloShirt</ProductTitle>
                    <ProductDescription>cotton mix shirt</ProductDescription>
                    <ProductPrice>20</ProductPrice>
                    <ProductWish>
                        <FavoriteBorder style={{padding:"5px", cursor:"pointer"}}/>
                        <WishButton style={{backgroundColor:"yellow"}}>Add to Cart</WishButton>
                        <WishButton style={{backgroundColor:"orange"}}>Buy Now</WishButton>
                    </ProductWish>
                </ProductInfo>
            </ProductContainer>
            <ProductContainer>
                <ImageContainer>
                    <Image src="https://images.unsplash.com/photo-1734364269335-d6f2913ac643?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="loading"/>
                </ImageContainer>
                <ProductInfo>
                    <ProductTitle>US PoloShirt</ProductTitle>
                    <ProductDescription>cotton mix shirt</ProductDescription>
                    <ProductPrice>20</ProductPrice>
                    <ProductWish>
                        <FavoriteBorder style={{padding:"5px", cursor:"pointer"}}/>
                        <WishButton style={{backgroundColor:"yellow"}}>Add to Cart</WishButton>
                        <WishButton style={{backgroundColor:"orange"}}>Buy Now</WishButton>
                    </ProductWish>
                </ProductInfo>
            </ProductContainer>
            <ProductContainer>
                <ImageContainer>
                    <Image src="https://images.unsplash.com/photo-1734364269335-d6f2913ac643?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="loading"/>
                </ImageContainer>
                <ProductInfo>
                    <ProductTitle>US PoloShirt</ProductTitle>
                    <ProductDescription>cotton mix shirt</ProductDescription>
                    <ProductPrice>20</ProductPrice>
                    <ProductWish>
                        <FavoriteBorder style={{padding:"5px", cursor:"pointer"}}/>
                        <WishButton style={{backgroundColor:"yellow"}}>Add to Cart</WishButton>
                        <WishButton style={{backgroundColor:"orange"}}>Buy Now</WishButton>
                    </ProductWish>
                </ProductInfo>
            </ProductContainer>
            <ProductContainer>
                <ImageContainer>
                    <Image src="https://images.unsplash.com/photo-1734364269335-d6f2913ac643?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="loading"/>
                </ImageContainer>
                <ProductInfo>
                    <ProductTitle>US PoloShirt</ProductTitle>
                    <ProductDescription>cotton mix shirt</ProductDescription>
                    <ProductPrice>20</ProductPrice>
                    <ProductWish>
                        <FavoriteBorder style={{padding:"5px", cursor:"pointer"}}/>
                        <WishButton style={{backgroundColor:"yellow"}}>Add to Cart</WishButton>
                        <WishButton style={{backgroundColor:"orange"}}>Buy Now</WishButton>
                    </ProductWish>
                </ProductInfo>
            </ProductContainer>
        </Container>
    )
}

export default Products;