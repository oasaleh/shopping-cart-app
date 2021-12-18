/* ------------------------------ imports ------------------------------ */
// react
import { useState } from 'react';

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

  // use localStorage
  // useEffect(() => {
  //   // checking if localStorage has a "hasVisited" key
  //   if (localStorage.getItem("cart")){
  //       // setting the state of welcomeMessage to "Welcome back!" if it does
  //     setWelcomeMessage("Welcome back!")
  //   } else {
  //       // creating the "hasVisited" key value pair in localStorage if it doesn't exist
  //     localStorage.setItem("hasVisited", "true")
  //   }
  //   // we are only running this useEffect on the first render of app because we passed an
  //   // empty array
  // },[])

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
      <div
        style={{
          height: '89%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        className="App"
      >
        <Header
          cartSize={cart.reduce((total, item) => total + item.quantity, 0)}
        />
        <Main cart={cart} addItem={addItem} removeItem={removeItem} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// Switch is where you want your components to render using
// react-router.
