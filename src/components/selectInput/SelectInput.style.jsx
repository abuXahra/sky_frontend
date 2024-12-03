

import styled from "styled-components";


export const SelectInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({InputWidth})=> InputWidth || "100%"};
    gap: 5px;
`

export const SelectInputLabel = styled.label`
    color: grey;
    font-size: 12px;
`

export const SelectInputStyle = styled.select`
    border: 1px solid grey; 
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    color: grey;
    background-color: transparent;
`

export const SelectInputOption= styled.option`
    font-size: 13px;
    color: grey;
`

export const SelectInputError = styled.span`
    color: red;
    font-size: 12px;
`