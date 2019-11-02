import styled from 'styled-components';

export const MainWrapper = styled.section`
  max-width: 960px;
  width:100%;
  margin:35px auto;
`;
export const MainContetnBox = styled.div`
  display:grid;
  grid-template-columns: minmax(auto, 232px) minmax(auto, 502px);
  grid-row-gap: 35px;
  grid-column-gap: 20px;
`;
export const TicketsWrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr;
`;
export const Img = styled.img`
  grid-area:1 / 1 / 2 / 3;
  justify-self:center;
`;
