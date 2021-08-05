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
      <h2>SHOPPING CART</h2>
      {cart.length ? shoppedItems : <p>Empty! Add some colors!</p>}
    </ShoppingCart>
  );
}

export default Cart;
