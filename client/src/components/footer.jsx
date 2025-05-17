import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 30vh;
  background-color: rgb(241, 206, 206);
  margin-top: auto;
`;
const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.h1``;
const NavList = styled.ul`
  list-style: none;
`;
const NavItem = styled.li`
  margin: 10px 10px;
  // padding: 10px;
  cursor: pointer;
`;

const Contact = styled.div``;

const ContactItem = styled.p`
  padding: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <Logo>ShopSy/ Social Links</Logo>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>Explore</NavItem>
          <NavItem>Cart</NavItem>
          <NavItem>Wishlist</NavItem>
        </NavList>
        <NavList>
          <NavItem>About Us</NavItem>
          <NavItem>Contact Us</NavItem>
          <NavItem>Privacy Policy</NavItem>
          <NavItem>Terms of Service</NavItem>
        </NavList>
        <Contact>
          <ContactItem>Contact Us</ContactItem>
          <ContactItem>Email:</ContactItem>
          <ContactItem>Address:</ContactItem>
        </Contact>
      </FooterTop>
      <FooterBottom>All rights reserved © 2025</FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
