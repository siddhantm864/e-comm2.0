import styled from "styled-components"
import Navbar from "../components/navbar"
import { useState } from "react";
import { Slider } from "@mui/material";
import Products from "../components/products";
import Footer from "../components/footer";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;
const Title = styled.h1`
    margin: 10px;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    color: #333;
    text-transform: uppercase;
`;
const FilterContainer = styled.div`
    display: flex;
    margin: 0px 10px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    padding: 10px;
`;
const FilterText = styled.span`
    // flex: 1;
    font-size: 20px;
    font-weight: 600;
    color: #333;
    text-transform: uppercase;
    margin-right: 10px;
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #ccc;
`;
const Option = styled.option`
    font-size: 16px;
    font-weight: 500;
    color: #333;

`;

const PriceSliderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

`;
const PriceValue = styled.span`
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin: 0 5px;
    width: 35px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #333;
`;
const PriceSlider = styled.input`
    width:200px;
    cursor: pointer;
`;
// const minValue = 0; 
// const MaxValue = 1000;


const ProductList = () => {
    const minDistance = 500;
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const handlePriceChange = (event, newValue,activeThumb) => {
        if (activeThumb === 0) {
            setPriceRange([Math.min(newValue[0], priceRange[1] - minDistance), priceRange[1]]);
        }
        else {
            setPriceRange([priceRange[0], Math.max(newValue[1], priceRange[0] + minDistance)]);
        }
    };

    return (
        <Container>
            <Navbar />
            <Title>Category</Title>
            <FilterContainer>
                <div style={{ display: "flex" }}>
                    <Filter>
                        <FilterText>Filter Products:</FilterText>
                        <Select name="color">
                            <Option style={{ backgroundColor: "light-grey" }} disabled selected>Color</Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                            <Option>Red</Option>
                            <Option>Blue</Option>
                            <Option>Yellow</Option>
                        </Select>
                        <Select name="size">
                            <Option style={{ backgroundColor: "light-grey" }} disabled selected>Size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort Products:</FilterText>
                        <Select name="sort">
                            <Option disabled selected>Sort</Option>
                            <Option>Newest</Option>
                            <Option>Price (low to high)</Option>
                            <Option>Price (high to low)</Option>
                            <Option>Popularity</Option>
                        </Select>
                    </Filter>
                </div>
                <Filter>
                    <FilterText>Price:</FilterText>
                    <PriceSliderContainer>
                        <PriceValue>{priceRange[0]}</PriceValue>
                        <Slider value={priceRange} onChange={handlePriceChange} min={0} max={5000} step={100}  disableSwap style={{ width: "200px"}} />
                        <PriceValue>{priceRange[1]}</PriceValue>
                    </PriceSliderContainer>
                </Filter>
            </FilterContainer>
            <Products/>
            {/* <Footer/> */}
        </Container>
    )
}

export default ProductList