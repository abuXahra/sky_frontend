
// search with chatgpt
// how to hide header and footer from dashboard routes in react mern starck



import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const HomeWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: aliceblue;
    padding: 50px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`



export const FormWrapper = styled.form`
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 70%;
        height: auto;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
    }
    `


export const InputHorizontalWrapper = styled.div`
     width: 100%;
     display: flex;
     gap: 20px;

     @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`


export const HideContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`



export const SuccessIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00ba00;
    color: white;
    border-radius: 100%;
`