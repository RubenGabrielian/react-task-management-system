import React, { useState } from 'react';
import Styled from 'styled-components';

const Form = Styled.div`
    margin: 10px;
        input {
            border: none;
            background: transparent;
            resize: none;
            height: 20px;
            margin-top: 12px;
            display: flex;
            justify-content: center;
            margin: 15px auto 0;
            width: 100%;
            padding-left: 10px;
            padding-top: 7px;
            outline: none;
        }

`

function CartListForm({ setListItem, listItems }) {

    const [cartContent, setCartContent] = useState('');

    const addCart = (e) => {
        e.preventDefault();
        setListItem([...listItems, { id: Date.now(), content: cartContent }]);
        setCartContent('');
    }

    return (
        <Form>
            <form onSubmit={addCart}>
                <input
                    onChange={(evt) => setCartContent(evt.target.value)}
                    placeholder='+ Add another card'
                    value={cartContent}
                />
            </form>
        </Form>
    )
}


export default CartListForm;