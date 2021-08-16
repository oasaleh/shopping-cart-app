/* ------------------------------ imports ------------------------------ */
import { useState } from 'react';
// style
import styled from 'styled-components';
// components
import CartItem from '../Components/CartItem';
/* -------------------------- styled-component ------------------------- */
const ShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const BuyButton = styled.button`
  width: 90px;
  height: 25px;
  background-color: #cceec4;
  border-radius: 8px;
  border: 0px;
  :hover {
    cursor: pointer;
    background-color: #dae5e5;
  }
`;
const EmptyCart = styled.div``;
const Message = styled.p`
  margin: 0 auto;
  padding: 3px;
  font-size: 12px;
`;
/* ----------------------------- component ----------------------------- */
function Cart({ cart, addItem, removeItem }) {
  const [buyMessage, setBuyMessage] = useState(false);

  function handleClick() {
    setBuyMessage(true);
    setTimeout(hideMessage, 3000);
  }
  function hideMessage() {
    setBuyMessage(false);
  }
  const shoppedItems = cart.map((item) => (
    <CartItem
      item={item}
      addItem={addItem}
      removeItem={removeItem}
      key={item.id}
    />
  ));
  return (
    <ShoppingCart>
      <h2 style={{ fontWeight: '800', fontSize: '1.2em' }}>SHOPPING CART</h2>
      {cart.length ? shoppedItems : <p>Empty! Add some squares!</p>}
      <p>
        Total:{' $'}
        {cart
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)}
      </p>
      <div>
        <BuyButton onClick={handleClick}>Buy</BuyButton>
        <Message
          style={
            buyMessage ? { visibility: 'visible' } : { visibility: 'hidden' }
          }
        >
          You're not going to buy fake squares, are you? 🤦‍♂️
        </Message>
      </div>
    </ShoppingCart>
  );
}

export default Cart;
