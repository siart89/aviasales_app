import React from 'react';
import styled, { keyframes } from 'styled-components';
import Plane from '../../Plane.svg';

const LoadBox = styled.div`
  position:relative;

`;
const trip = keyframes`
  from {
    left:0;
    top:80%;
  }
  to {
    left: 100%;
    top:50%
  }

  50% {
    top: 10%
  }
`;

const PlaneFlight = styled.img`
  animation: ${trip} 5s linear infinite;
  position:absolute;
  transform: rotate(30deg);
`;


const Loading = () => (
  <LoadBox>
    <PlaneFlight src={Plane} alt="Plane" />
  </LoadBox>
);
export default Loading;
