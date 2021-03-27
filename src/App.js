import './App.css';
import CartList from './components/Card/CartList';
import Wrapper from './components/Wrapper';
import React, { useState } from 'react';

function App() {


  const [listItems, setListItems] = useState([
    { id: 1, content: 'Learn React js' },
    { id: 2, content: 'Learn Node js' }
  ]);

  return (
    <div className="App">
      <Wrapper>
        <CartList listItems={listItems} setListItem={setListItems} />
      </Wrapper>
    </div>
  );
}

export default App;
