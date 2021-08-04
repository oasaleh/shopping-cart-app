import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import Careers from './Pages/Careers';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Products from './Pages/Products';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/Products">
            <Products />
          </Route>
          <Route exact path="/Careers">
            <Careers />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// Switch is where you want your components to render using
// react-router.
