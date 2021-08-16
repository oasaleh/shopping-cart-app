import styled from 'styled-components';
const CareerPage = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  height: 100%;
`;
const JobCard = styled.div`
  text-align: left;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 8px;
  width: 445px;
  cursor: pointer;
  :hover {
    background-color: #dae4e4;
  }
`;

const Careers = () => (
  <CareerPage>
    <h2>Opportunities</h2>
    <JobCard>
      <p style={{ fontWeight: '700', textDecoration: 'underline' }}>
        UI/UX Developer
      </p>
      <p style={{ fontSize: '.8em' }}>
        We desperately need a developer to polish our website..
      </p>
    </JobCard>
  </CareerPage>
);
export default Careers;
