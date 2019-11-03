import styled from 'styled-components';

export const MainWrapper = styled.section`
  max-width: 960px;
  width:100%;
  margin:35px auto;
  display:flex;
`;
export const MainContetnBox = styled.div`
  display:grid;
  grid-template-columns: minmax(auto, 232px) minmax(auto, 502px);
  margin:0 auto;
  grid-row-gap: 35px;
  grid-column-gap: 20px;

  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width:90vw;
  }
  @media (max-width: 475px) {
    grid-template-columns: 1fr;
    width:98vw;
    grid-column-gap: 5px;
  }
`;
export const TicketsWrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr;
`;
export const Img = styled.img`
  grid-area:1 / 1 / 2 / 3;
  justify-self:center;

  @media (max-width: 768px) {
    grid-area:1 / 1 / 2 / 2;
  }
`;
