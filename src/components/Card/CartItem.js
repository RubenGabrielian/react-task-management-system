import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    background: white;
    padding: 15px 10px;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
    box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
    &:hover {
        background: #f9f9f9;
    }
`

function CartItem () {
    return (
        <Item>Cart Itme</Item>
    )
}

export default CartItem;