import React, { useState } from 'react';
import { HeaderWrapper, NavigationStyle } from './Head.style';
import { useNavigate } from 'react-router-dom';



const Head = (props) => {

    const navigate = useNavigate();
    return (
        <HeaderWrapper>
            <h1>SKY MEMORIAL COMPLEX FORUM</h1>
            <NavigationStyle onClick={()=>navigate('/applicants')}>.</NavigationStyle>
        </HeaderWrapper>

    );
}

export default Head;
