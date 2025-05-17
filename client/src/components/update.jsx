import { Add, Close } from "@mui/icons-material"
import styled from "styled-components"

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

const PopupContainer=styled.div`
    background-color: white;
    width: 600px;
    height: 500px;
    border-radius: 10px;
    border: 1px solid red;
    position: relative;
`;

const CloseButton=styled(Close)`
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    color: gray;
    font-size: 30px;
`;

const ProfileTitle=styled.h2`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin: 20px 0;

`;
const ProfileItems=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
const ProfileItem=styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    width: 80%;
    height: 100px;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    position: relative;
`;
const AddressType=styled.span`
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
const AddressName=styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #333;
    text-align: left;
    width: 100%;
    margin: 5px 0;
`;
const AddressDesc=styled.p`
    font-size: 15px;
    font-weight: 400;
    color: #333;
    text-align: left;
    margin: 5px 0;
    width: 100%;

`;
const AddressButton=styled.div`
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top:10px;
    `;
const EditAddress=styled.button`
    margin: 5px;
    border:none;
    color: blue;    
    background-color: white;
    cursor: pointer;
`;
const RemoveAddress=styled.button`
    margin: 5px;
    border:none;
    color: red;
    background-color: white;
    cursor: pointer;
`;
const AddAddressButton=styled.div`
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
const AddAddressText=styled.h3`
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



const Update=({onClose})=>{
    return(
        <Overlay>
            <PopupContainer>
                <CloseButton onClick={onClose}/>
                <ProfileTitle>Edit your Profile</ProfileTitle>
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
                    <AddAddressButton>
                        <Add style={{ fontSize: "50px", color:"navyblue" }} />
                        <AddAddressText>Add New Address</AddAddressText>
                    </AddAddressButton>
                </ProfileItems>
            </PopupContainer>
        </Overlay>
    )
}

export default Update;