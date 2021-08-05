/* ---------------------------- imports --------------------------- */
// style
import styled from 'styled-components';
// react-router
import { Link } from 'react-router-dom';
/* ----------------------- styled-components ---------------------- */
const PageHeader = styled.header`
  text-align: center;
`;
const NavMenu = styled.menu`
  margin: auto;
  padding: 0;
  text-align: center;
`;
const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0;
  list-style: none;
`;
const MenuItem = styled.li`
  padding: 2px 10px;
  margin: 0;
  font-size: 1.05em;
  color: darkgrey;
`;
/* --------------------------- component -------------------------- */
function Header({ cartSize }) {
  return (
    <div>
      <PageHeader>
        <h1>This is a Header</h1>
        <nav>
          <NavMenu>
            <Navbar>
              <Link to="/">
                <MenuItem>Home</MenuItem>
              </Link>
              <Link to="/About">
                <MenuItem>About</MenuItem>
              </Link>
              <Link to="/Products">
                <MenuItem>Products</MenuItem>
              </Link>
              <Link to="/Careers">
                <MenuItem>Careers</MenuItem>
              </Link>
              <Link to="/Cart">
                <MenuItem>
                  Cart {cartSize > 0 ? <span>({cartSize})</span> : null}
                </MenuItem>
              </Link>
            </Navbar>
          </NavMenu>
        </nav>
      </PageHeader>
    </div>
  );
}

export default Header;

// Use Link to intercept server request and render components
// immediately.
