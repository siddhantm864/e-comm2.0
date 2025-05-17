import LocalMallIcon from "@mui/icons-material/LocalMall";
import styled from "styled-components";
import { Bookmark, Place, Portrait } from "@mui/icons-material";
import Navbar from "../components/navbar";
import { useState } from "react";
import Address from "../components/address";
import Update from "../components/update";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ProfileTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin: 20px 0;
  padding: 10px;
`;
const ProfileItems = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  height: auto;
  margin: 20px auto;
  padding: 10px;
  width: 80%;
`;
const ProfileItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 500px;
  height: 150px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
`;

const ProfileItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 20px;
  width: 60%;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  flex:;
`;
const ProfileItemName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  // margin: 10px 0;
  padding: 10px;
  color: #333;
  text-align: center;
`;
const ProfileitemDesc = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
`;

const Profile = () => {
  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);

  const handleUpdateClick = () => {
    setShowUpdatePopup(true);
  };

  const handleCloseUpdatePopup = () => {
    setShowUpdatePopup(false);
  };

  const handleAddressClick = () => {
    setShowAddressPopup(true);
  };

  const handleClosePopup = () => {
    setShowAddressPopup(false);
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ProfileTitle>Your Profile</ProfileTitle>
        <ProfileItems>
          <ProfileItem>
            <LocalMallIcon style={{ fontSize: "50px", color: "orangered" }} />
            <ProfileItemBox>
              <ProfileItemName>Your Orders</ProfileItemName>
              <ProfileitemDesc>Description</ProfileitemDesc>
            </ProfileItemBox>
          </ProfileItem>
          <ProfileItem onClick={handleUpdateClick}>
            <Portrait style={{ fontSize: "50px" }} />
            <ProfileItemBox>
              <ProfileItemName>Update Profile</ProfileItemName>
              <ProfileitemDesc>Description</ProfileitemDesc>
            </ProfileItemBox>
          </ProfileItem>
          <ProfileItem>
            <Bookmark style={{ fontSize: "50px" }} />
            <ProfileItemBox>
              <ProfileItemName>Save for Later</ProfileItemName>
              <ProfileitemDesc>Description</ProfileitemDesc>
            </ProfileItemBox>
          </ProfileItem>
          <ProfileItem onClick={handleAddressClick}>
            <Place style={{ fontSize: "50px", color: "yellowgreen" }} />
            <ProfileItemBox>
              <ProfileItemName>Saved Addrres</ProfileItemName>
              <ProfileitemDesc>
                View and Manage your saved address
              </ProfileitemDesc>
            </ProfileItemBox>
          </ProfileItem>
        </ProfileItems>
      </Wrapper>
      {showUpdatePopup && <Update onClose={handleCloseUpdatePopup} />}
      {showAddressPopup && <Address onClose={handleClosePopup} />}
    </Container>
  );
};

export default Profile;
