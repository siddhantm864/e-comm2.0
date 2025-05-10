import styled from 'styled-components';
import { Button as MuiButton, Input as MuiInput} from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';

const Container = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;    
    widht: 100%;
    height: 40vh;
    background-color:rgb(241, 206, 206);
`;

const Wrapper = styled.div`
    display: flex;
    border: 1px solid lightgray;
    border-radius: 50px;
    background-color: white;

    // align-items: center;    
    // justify-content: center;
    // width: 100%;
`;

const StyledInput = muiStyled(MuiInput)`
    border: none;
    outline: none;
    border-radius: 50px;
    width: 100%;
    padding-left: 10px;
    font-weight: 400;
    &:focus {
        outline: none;
        // border: 1px solid grey;
    }
`;


// const StyledButton = muiStyled(MuiButton)(({ theme }) => ({
//     backgroundColor: '#3f51b5',
//     color: 'white',
//     padding: '10px 20px',
//     borderRadius: '50px',
//     fontWeight: 'bold',
//     textTransform: 'none',
//     '&:hover': {
//         backgroundColor: '#303f9f',
//     },
// }));

const StyledButton = muiStyled(MuiButton)`
    background-color: #3f51b5;
    color: white;
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: 'bold';
    textTransform: 'none';
    '&:hover': {
        background-color:rgb(189, 191, 202);
    }
`;



const NewsLetter = () => {
    return(
        <Container>
                <h1 style={{ textAlign: "center" }}>News Letter</h1>
                <p style={{ textAlign: "center" }}>Get timely updates from your favorite products.</p>
                <Wrapper>
                <StyledInput placeholder="Your email" disableUnderline/>
                <StyledButton>Subscribe</StyledButton>
                </Wrapper>
                <p style={{ textAlign: "center" }}>You can unsubscribe at any time.</p>
        </Container>
    )
}

export default NewsLetter;