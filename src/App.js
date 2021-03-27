import './App.css';
import CartList from './components/Card/CartList';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <CartList />
      </Wrapper>
    </div>
  );
}

export default App;
