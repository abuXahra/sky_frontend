



import styled from 'styled-components'

export const OverlayWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;  
position: fixed; 
height: 100vh; 
width:100%; 
top: 0px; 
left: 0px;
background-color: #00000076;
overflow: auto;
padding-bottom: 40px;
padding-top: 40px;
`


export const OverlayCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: ${({contentWidth})=> contentWidth || "35%"};
    height: ${({contentHight})=> contentHight || 'auto'};
    background-color: white;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 20px;
    font-size: 18px;
    text-align: center;

    img{
        border-radius: 10px;
        border: 1px solid red;
    }

    @media (max-width: 768px) {
        width: 80%;
 }
`

export const CloseIcon = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    span{
        cursor: pointer;
    }
`


export const OverlayButton = styled.div`
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
`