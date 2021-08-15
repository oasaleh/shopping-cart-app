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
  & > a {
    text-decoration: linen;
    color: #353535;
    :hover {
      text-decoration: underline;
      text-decoration-color: grey;
    }
  }
  :hover {
    background-color: #dae4e4;
    border-radius: 7px;
  }
`;
/* --------------------------- component -------------------------- */
function Header({ cartSize }) {
  return (
    <div>
      <PageHeader>
        <h1
          style={{
            backgroundColor: '#CBEEC5',
            width: 'fit-content',
            margin: '20px auto 20px auto',
            padding: '7px',
            borderRadius: '6px',
          }}
        >
          Square Shop
        </h1>
        <nav>
          <NavMenu>
            <Navbar>
              <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>

              {/* <Link to="/About">
                <MenuItem>About</MenuItem>
              </Link> */}

              <MenuItem>
                <Link to="/Products">Products </Link>
              </MenuItem>

              <MenuItem>
                <Link to="/Careers">Careers</Link>
              </MenuItem>

              <MenuItem>
                <Link to="/Cart">
                  Cart {cartSize > 0 ? <span>({cartSize})</span> : null}
                </Link>
              </MenuItem>
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
