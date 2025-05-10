import Styled from 'styled-components';
import CategoryItem from './categoryItem';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';

const Container = Styled.div``;

const Slider = Styled.div`
    background-color:rgb(255, 255, 255);
    display: flex;
    position: relative;
`;

const Arrow = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%); /* Adjust for proper centering */
    left: ${(props)=> props.direction === "left" && "10px"};
    right: ${(props)=> props.direction === "right" && "10px"};
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
`;

const Wrapper = Styled.div`
    display:grid;
    grid-template-columns: repeat(5, minmax(200px, 2fr));
    // margin: 0 auto;
    gap: 20px;
    justify-content: center;
`;


const Categories = () => {
    return (
        <Container>
            <h1 style={{textAlign:"center"}}>Categories</h1>
            <p style={{textAlign:"center"}}>Explore our wide range of categories</p>
            <Slider>
                <Arrow direction="left">
                    <ArrowLeftOutlined/>
                </Arrow>
                <Wrapper>
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                </Wrapper>
                <Arrow direction="right">
                    <ArrowRightOutlined/>
                </Arrow>
            </Slider>
        </Container>
    );
}

export default Categories;