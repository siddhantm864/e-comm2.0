import { Add, Cancel, Close, Save } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContainer = styled.div`
  background-color: white;
  width: 600px;
  height: ${(props) => (props.isExpanded ? "700px" : "500px")};
  border-radius: 10px;
  border: 1px solid red;
  position: relative;
  transition: height 0.3s ease;
  overflow: hidden;
`;

const CloseButton = styled(Close)`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  color: gray;
  font-size: 30px;
`;

const ProfileTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin: 20px 0;
`;
const ProfileItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  max-height: 80%;
  padding: 10px;
  box-sizing: border-box;
`;
const ProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
  height: 100px;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: relative;
`;
const AddressType = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: orangered;
  border: 1px solid grey;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
const AddressName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-align: left;
  width: 100%;
  margin: 5px 0;
`;
const AddressDesc = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #333;
  text-align: left;
  margin: 5px 0;
  width: 100%;
`;
const AddressButton = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;
const EditAddress = styled.button`
  margin: 5px;
  border: none;
  color: blue;
  background-color: white;
  cursor: pointer;
`;
const RemoveAddress = styled.button`
  margin: 5px;
  border: none;
  color: red;
  background-color: white;
  cursor: pointer;
`;
const AddAddressButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 80%;
  height: 50px;
`;
const AddAddressText = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-align: left;
  margin: 5px 0;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  align-items: center;
`;

const NewAddressForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 250px;
  border: 1px solid #ccc;
  border-radius: 10px;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
`;

const Input = styled.input`
  width: 95%;
  height: 35px;
  padding: 5px;
  margin: 5px 10px;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 10px;
`;
const SaveButton = styled.button`
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: blue;
  background-color: white;
  padding: 5px 10px;
  cursor: pointer;
`;
const CancelButton = styled.button`
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: red;
  padding: 5px 10px;
  margin-right: 20px;
  background-color: white;
  cursor: pointer;
`;

const Address = ({ onClose }) => {
  const [isAddingAddress, setIsAddingAddress] = useState(false);

  const handleAddNewAddress = () => {
    setIsAddingAddress(true);
  };
  const handleClose = () => {
    setIsAddingAddress(false);
  };
  const handleSave = (e) => {
    e.preventDefault();
    // Handle save logic here
    console.log("Address saved");
    setIsAddingAddress(false);
  };
  return (
    <Overlay>
      <PopupContainer isExpanded={isAddingAddress}>
        <CloseButton onClick={onClose} />
        <ProfileTitle>Your Address</ProfileTitle>
        <ProfileItems>
          <ProfileItem>
            <AddressType>Home</AddressType>
            <AddressName>Name</AddressName>
            <AddressDesc>Address</AddressDesc>
            <AddressButton>
              <EditAddress>Update</EditAddress>
              <RemoveAddress>Remove</RemoveAddress>
            </AddressButton>
          </ProfileItem>
          <ProfileItem>
            <AddressType>Home</AddressType>
            <AddressName>Name</AddressName>
            <AddressDesc>Address</AddressDesc>
            <AddressButton>
              <EditAddress>Update</EditAddress>
              <RemoveAddress>Remove</RemoveAddress>
            </AddressButton>
          </ProfileItem>
          {!isAddingAddress && (
            <AddAddressButton onClick={handleAddNewAddress}>
              <Add style={{ fontSize: "50px", color: "navyblue" }} />
              <AddAddressText>Add New Address</AddAddressText>
            </AddAddressButton>
          )}
          {isAddingAddress && (
            <NewAddressForm onSubmit={handleSave}>
              <Input type="text" placeholder="Name" required />
              <Input type="text" placeholder="Address" required />
              <Row>
                <Input type="text" placeholder="City" required />
                <Input type="text" placeholder="State" required />
              </Row>
              <Input type="text" placeholder="Address Type" />
              <FormButtons>
                <SaveButton onClick={handleSave}> Save</SaveButton>
                <CancelButton onClick={handleClose}>Cancel</CancelButton>
              </FormButtons>
            </NewAddressForm>
          )}
        </ProfileItems>
      </PopupContainer>
    </Overlay>
  );
};

export default Address;
