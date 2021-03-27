import React from 'react';
import styled from 'styled-components';
import Styled from 'styled-components';

const HeaderStyled = styled.div`
    background: #0065ff;
    padding: 20px;
    h1 {
        color: white;
    }
`


function Header () {
    return (
        <HeaderStyled>
            <h1>Tasks Management System</h1>
        </HeaderStyled>
    )
}

export default Header;