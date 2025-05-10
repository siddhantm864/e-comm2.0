import { Container } from '@mui/material';
import Navbar from '../components/navbar';

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>Your Shopping Cart</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>

                </Bottom>
                <Summary>
                    
                </Summary>
            </Wrapper>
        </Container>
    );
}

export default Cart;