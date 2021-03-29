import React, { useState } from 'react';
import styled from 'styled-components';

const Item = styled.div`
    background: white;
    padding: 15px 10px;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
    box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
    position: relative;
    &:hover {
        background: #f9f9f9;
        button {
            opacity: 1;
        }
    }
    button {
        position:absolute;
        top: 5px;
        border: none;
        background: transparent;
        right: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        opacity: 0;
        transition: 200ms;
        svg {
            color: red;
        }
    }
    input {
        border: none;
        outline: none;
        padding: 13px;
        width: 90%;
        background: transparent;
    }
`

function CartItem({ item, setListItem, listItems }) {

    const deleteCart = (id) => {
        const updatedCartsList = [...listItems].filter((item) => item.id !== id);
        setListItem(updatedCartsList);
    }
    
    const [content, setContent] = useState(item.content);

    return (
        <Item>
            <input type="text" onChange={(evt) => setContent(evt.target.value)} value={content} />
            <button onClick={() => deleteCart(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg>
            </button>
        </Item>
    )
}

export default CartItem;