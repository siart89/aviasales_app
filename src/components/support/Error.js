import React from 'react';
import styled from 'styled-components';

const str = "Whoops, that's an error";
const descript = "Sorry, we can't reach our servers. Please reload this page";

const Wrapper = styled.div`
  width: 80%;
  margin: 100px auto;
  display:flex;
  flex-direction:column;
  background-color:#fff;
  min-height:175px;
  border-radius:5px;
  box-shadow:0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const ErrorText = styled.span`
  font-weight:600;
  font-size:14px;
  color:#fff;
  line-height:35px;
`;

const TextBox = styled.div`
  background-color: #de1d1d;
  text-align:center;
  height:35px;
  border-radius: 5px 5px 0 0 ;
`;

const Description = styled.div`
  padding:10px;
  color:#4A4A4A;
  font-size:14px;
`;

const ErrorPage = () => (
  <Wrapper>
    <TextBox>
      <ErrorText>
        {str}
      </ErrorText>
    </TextBox>
    <Description>
      {descript}
    </Description>
  </Wrapper>
);

export default ErrorPage;
