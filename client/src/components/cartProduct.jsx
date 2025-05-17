import styled from "styled-components";
import {
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank,
} from "@mui/icons-material";
import slider1 from "../assets/slider1.jpg";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

const CheckBox = styled.div``;
const ImageContainer = styled.div`
  dispaly: flex;
  justify-content: center;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
`;
const ProductInfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;
const ProductName = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const ProductPrice = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const ProductSize = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;
const ProductColor = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const CartWish = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductQuantity = styled.span`
  border: 2px solid rgb(203, 192, 37);
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: lightgray;
  }
`;
const Quantity = styled.span`
  margin: 0 10px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
`;

const RemoveButton = styled.button`
  margin: 5px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: rgb(242, 98, 98);
  &:hover {
    text-decoration: underline;
  }
`;
const SaveLaterButton = styled.button`
  margin: 5px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: rgb(80, 77, 77);
  border-right: 2px solid lightgray;
  padding-right: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const CartProduct = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <CheckBox onClick={handleCheckBox} style={{ cursor: "pointer" }}>
        {isChecked ? (
          <CheckBoxIcon style={{ color: "green" }} />
        ) : (
          <CheckBoxOutlineBlank style={{ color: "gray" }} />
        )}
      </CheckBox>
      <ImageContainer>
        <Image src={slider1} alt="Product Image" />
      </ImageContainer>
      <ProductInfoContainer>
        <ProductName>Product DESC</ProductName>
        <ProductPrice>$100</ProductPrice>
        <ProductSize>Size: M</ProductSize>
        <ProductColor>Color: Red</ProductColor>
        <CartWish>
          <ProductQuantity>
            <QuantityButton>-</QuantityButton>
            <Quantity>1</Quantity>
            <QuantityButton>+</QuantityButton>
          </ProductQuantity>
          <SaveLaterButton>Save for later</SaveLaterButton>
          <RemoveButton>Remove</RemoveButton>
        </CartWish>
      </ProductInfoContainer>
    </Container>
  );
};

export default CartProduct;
