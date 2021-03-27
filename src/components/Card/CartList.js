import React from 'react';
import styled from 'styled-components';
import CartListTop from './CardListTop';
import CartItem from './CartItem';
import CartListForm from './CartListForm';

const List = styled.div`
    max-width: 300px;
    background: #ddd;
    padding: 10px;
    border-radius: 3px;
    margin: 25px 0 0 25px;
    background-color: #ebecf0;
`

function CartList({ listItems, setListItem }) {



    return (
        <List>
            <CartListTop />
            <div className="cartList">
                {listItems.map((item) => {
                    return (
                        <CartItem
                            key={item.id}
                            item={item}
                            setListItem={setListItem}
                            listItems={listItems}
                        />
                    )
                })}
            </div>
            <CartListForm setListItem={setListItem} listItems={listItems} />
        </List>
    )
}

export default CartList;