import styled from 'styled-components';
import github from '../assets/github.png';

const PageFooter = styled.footer`
  /* margin-top: auto; */
  width: 100%;
  height: 40px;
  text-align: center;
  margin-bottom: -100px;
`;

function Footer() {
  return (
    <PageFooter>
      <a href="https://github.com/oasaleh/shopping-cart-app">
        <img
          style={{ width: '24px', paddingTop: '40px' }}
          src={github}
          alt="GitHub"
        />
      </a>
    </PageFooter>
  );
}

export default Footer;
