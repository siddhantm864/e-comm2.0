import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import {slider1, slider2, slider3} from "../assets";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex; 
    postion:relative;
    overflow: hidden;
    // border: 4px solid red; 
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "20px"};
    right: ${(props) => props.direction === "right" && "20px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;  
`;

const Wrapper = styled.div`
    // border: 4px solid green;  
    height: 100%;  
    display: flex;  
    // transition: ${(props) => (props.isTransitioning ? "transform 1.0s ease-in-out" : "none")};
    transition: transform 1.0s ease-in-out;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    // border: 4px solid yellow;
    width:100vw;
    height:100%;
    display: flex;
    position: relative;
    aligh-items: center;

`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    // border: 4px solid blue;
`;

const Image = styled.img`
    height: 100%;
    width:100%;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    color: #fff;
    background-color: transparent;
    cursor: pointer;
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    // const [isTransitioning, setIsTransitioning] = useState(true);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // useEffect(() => {
    //     if (!isTransitioning) {
    //         const timer=setTimeout(() => {
    //             setIsTransitioning(true);
    //         }, 30);
    //         return () => clearTimeout(timer);
    //     }
    // }, [isTransitioning]);

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                <Slide>
                    <ImgContainer>
                        <Image src={slider1} alt="slider" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Summer</Title>
                        <Desc>this is sale you are waiting for</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src={slider2} alt="slider" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Winter</Title>
                        <Desc>this is sale you are waiting for</Desc>
                        <Button>Shop In Winter</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src={slider3} alt="slider" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Rainy</Title>
                        <Desc>this is sale you are waiting for</Desc>
                        <Button>Shop Rainy</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightIcon />
            </Arrow>
        </Container>
    )
}

export default Slider;

