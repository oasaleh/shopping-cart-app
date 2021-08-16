import styled from 'styled-components';
import Logo from '../assets/squareLogo.png';

const MainPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0 20%;
  gap: 20px;
`;
const PunchLine = styled.p`
  font-size: 3em;
  font-weight: 800;
  text-transform: capitalize;
`;
const Home = () => (
  <MainPage>
    <picture style={{ minWidth: '40%' }}>
      <img style={{ width: '100%' }} src={Logo} alt="squareLogo" />
    </picture>
    <PunchLine>Buy your square now!</PunchLine>
  </MainPage>
);
export default Home;
