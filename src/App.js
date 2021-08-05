/* ------------------------------ imports ------------------------------ */
// react
import React, { useState, useEffect } from 'react';

// react-router
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

/* ----------------------------- component ----------------------------- */
function App() {
  // initialize cart and set it to an empty array of objects.
  const [cart, updateCart] = useState([]);

  // adds item to shopping cart.
  function addItem(item) {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    // if the item does not exist in cart
    if (itemIndex === -1) {
      updateCart([...cart, item]);
    } else {
      const updatedCart = Array.from(cart);
      updatedCart[itemIndex].quantity += 1;
      updateCart(updatedCart);
    }
  }

  // remove item from shopping cart.
  function removeItem(item) {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    const updatedCart = Array.from(cart);
    // if the item exists do...
    if (itemIndex > -1) {
      if (updatedCart[itemIndex].quantity > 1) {
        updatedCart[itemIndex].quantity -= 1;
      } else {
        updatedCart.splice(itemIndex, 1);
      }
    }
    updateCart(updatedCart);
  }

  return (
    <Router>
      <div className="App">
        <Header cartSize={cart.length} />
        <Main cart={cart} addItem={addItem} removeItem={removeItem} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// Switch is where you want your components to render using
// react-router.
