import styled from "styled-components";
import slider1 from '../assets/slider1.jpg';

const Container = styled.div`
    flex:1;
    margin:6px;
    height:50vh;
    position:relative;
`;

const Link = styled.a``;

const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;

const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    color:white;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

`;

const Title = styled.h1`
    color:white;
    margin-bottom:20px;
`;

const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:gray;
    cursor:pointer;
    font-weight:600;

`;

const CategoryItem = () => {
    return (
        <Container>
            <Link />
            <Image src={slider1} />
            <Info>
                <Title>Music</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    );
}

export default CategoryItem;