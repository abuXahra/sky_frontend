import styled from 'styled-components'

export const HeaderWrapper = styled.div`
width: 100%;
height: auto; 
display: flex;
justify-content: center;
text-align: center;
align-items: center;
padding-top: 40px;
background-color: aliceblue;
position: relative;

h1{
    color: #00004b
}

@media (max-width: 768px) {
    h1{
        font-size: 25px;
}
    }
`


export const NavigationStyle = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 100%;
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #808080aa;
`