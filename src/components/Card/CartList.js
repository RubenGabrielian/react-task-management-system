import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const List = styled.div`
    max-width: 300px;
    background: #ddd;
    padding: 10px;
    border-radius: 3px;
    margin: 25px 0 0 25px;
    background-color: #ebecf0;
    .cart-list-top {
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
    }
    .cart-list-bottom {
        margin: 10px;
        button {
            width: 100%;
            border: none;
            padding: 10px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 3px;
            background: transparent;
            &:hover {
                background: #f9f9f9;
            }
        }
    }
`

function CartList () {
    return (
        <List>
            <div className='cart-list-top'>
                <span>Todo</span>
                <span>...</span>
            </div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <div className='cart-list-bottom'>
                <button>+ Add another card</button>
            </div>
        </List>
    )
}

export default CartList;