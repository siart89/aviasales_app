import styled from 'styled-components';

export const TicketWrapper = styled.div`
  max-width: 502px;
  width: 100%;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap:20px;
  padding:20px;
  margin-top:20px;
  background-color:#fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const Cost = styled.span`
  font-weight:600;
  font-size:24px;
  line-height:24px;
  color:#2196F3;
  grid-area: 1 / 1 / 2 / 3; 
`;

export const Img = styled.img`
  grid-area: 1 / 3 / 2 /4; 
`;

export const InnerBox = styled.div`
  display:flex;
  justify-content:flex-start;
  flex-direction:column;
  align-content:center;
`;

export const TitleText = styled.span`
  font-weight:600;
  font-size:12px;
  line-height:18px;
  letter-spacing:0.5px;
  text-transform:uppercase;
  color:#A0B0B9;
`;

export const InfoText = styled.span`
  font-weight:600;
  font-size:14px;
  line-height:21px;
  letter-spacing:0.5px;
  color:#4A4A4A;
`;
