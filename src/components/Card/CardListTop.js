import React from 'react';
import styled from 'styled-components';


const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    span {
        font-weight: bold;
    }
    span:last-child {
        font-size: 19px;
        cursor: pointer;
    }
`

function CartListTop() {
    return (
        <Top>
            <span>Todo!</span>
            <span>...</span>
        </Top>
    )
}

export default CartListTop;