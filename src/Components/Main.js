import { Route, Switch, NavLink, Link } from 'react-router-dom';
import About from '../Pages/About';
import Careers from '../Pages/Careers';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import Products from '../Pages/Products';

function Main({ cart, addItem, removeItem }) {
  return (
    <div className="mainWindow">
      <Switch>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Cart">
          <Cart cart={cart} removeItem={removeItem} />
        </Route>
        <Route exact path="/Products">
          <Products addItem={addItem} />
        </Route>
        <Route exact path="/Careers">
          <Careers />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
