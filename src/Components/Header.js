import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <h1>This is a Header</h1>
        <nav>
          <menu>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/About">
                <li>About</li>
              </Link>
              <Link to="/Products">
                <li>Products</li>
              </Link>
              <Link to="/Careers">
                <li>Careers</li>
              </Link>
              <Link to="/Cart">
                <li>Cart</li>
              </Link>
            </ul>
          </menu>
        </nav>
      </header>
    </div>
  );
}

export default Header;

// Use Link to intercept server request and render components
// immediately.
