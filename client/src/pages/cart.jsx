import styled from "styled-components";
import Navbar from "../components/navbar";
import CartProduct from "../components/cartProduct";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  // padding: 20px;
`;

const CartTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
  border-radius: 10px;
`;

const CartTopButton = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const CartTopText = styled.span`
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  border: none;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 10px;
  width: 100%;
  height: 100%;
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: 0 10px;
  overflow-y: auto;
`;

const CartPrice = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;
  margin: 0 20px;
  border: 1px solid #ccc;
  height: 400px;
`;

const CartPriceHeader = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  // margin-bottom: 10px;
  padding: 10px;
`;
const CartText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #333;
`;
const CartPriceButton = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: #333;
  color: white;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <CartTitle>Your Cart</CartTitle>
        <CartTop>
          {/* <ClearCart>Clear all</ClearCart> */}
          <CartTopButton>Continue Shopping</CartTopButton>
          <CartTopText>Shopping Bag (2)</CartTopText>
          <CartTopButton>Your Wishlist (0)</CartTopButton>
        </CartTop>
        <CardBottom>
          <CartItem>
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </CartItem>
          <CartPrice>
            <CartPriceHeader>Order Summary</CartPriceHeader>
            <CartText>
              <CartTopText>Subtotal: $100</CartTopText>
              <CartTopText>Estimated Shipping: $10</CartTopText>
              <CartTopText>Shipping Discount: $-10</CartTopText>
              <CartTopText>Coupons: $10</CartTopText>
              <CartTopText>Total: $100</CartTopText>
            </CartText>
            <CartPriceButton>Checkout Now</CartPriceButton>
          </CartPrice>
        </CardBottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
