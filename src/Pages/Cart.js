/* ------------------------------ imports ------------------------------ */
// style
import styled from 'styled-components';
// components
import CartItem from '../Components/CartItem';
/* -------------------------- styled-component ------------------------- */
const ShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
/* ----------------------------- component ----------------------------- */
function Cart({ cart, addItem, removeItem }) {
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
      <h2 style={{ fontWeight: '800', fontSize: '1.8em' }}>SHOPPING CART</h2>
      {cart.length ? shoppedItems : <p>Empty! Add some squares!</p>}
      <p>
        Total:{' $'}
        {cart
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)}
      </p>

      <BuyButton>Buy</BuyButton>
    </ShoppingCart>
  );
}

export default Cart;
