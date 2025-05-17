import React from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import { ShoppingBag, FavoriteBorder, Search } from "@mui/icons-material";
import { Badge } from "@mui/material";

//styled components

const Container = styled.div`
  width: 100%;
  // background-color:blue;
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  padding: 0px 10px;
`;

const Input = styled.input`
  border: none;
  border-radius: 50px;
  width: 100%;
  padding-left: 10px;
  font-weight: 400;
  &:focus {
    outline: none;
    // border: 1px solid grey;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 50px;
  margin-left: 15px;
  padding: 5px;
  width: 200px;
  &:hover {
    border: 1px solid black;
  }
  &:hover * {
    color: black;
  }
  &:focus-within {
    border: 1px solid gray;
  }
`;

const Center = styled.div``;

const MenuContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  text-align: center;
  font-size: 20px;
`;

const MenuItem = styled.div`
  width: 60px;
  padding: 10px 25px;
  cursor: pointer;
  margin: 0px 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative; /* Required for the ::after pseudo-element */
  &:hover::after {
    content: "";
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 85%; /* Adjust the width as needed */
    border-bottom: 3px solid red;
    transition: border-bottom 0.6s ease-in-out;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`;

const IconContainer = styled.div`
  display: flex;
`;

const IconItem = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: 10px;
  align-items: center;
  padding: 10px;
`;

const StyledBadge = styled(Badge)`
  .MuiBadge-badge {
    right: 10px;
    top: 10px;
    border: 1px solid white;
    padding: 0 4px;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>ShopSy</Logo>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <MenuContainer>
            <MenuItem>Home</MenuItem>
            <MenuItem>Men</MenuItem>
            <MenuItem>Women</MenuItem>
            <MenuItem>Kids</MenuItem>
            <MenuItem>Beauty</MenuItem>
          </MenuContainer>
        </Center>
        <Right>
          <IconContainer>
            <IconItem>
              <PersonIcon />
            </IconItem>
            <IconItem>
              <FavoriteBorder />
            </IconItem>
            <StyledBadge badgeContent={4} color="primary">
              <IconItem>
                <ShoppingBag />
              </IconItem>
            </StyledBadge>
          </IconContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
