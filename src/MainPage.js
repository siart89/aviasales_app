import React, { useContext } from 'react';
import styled from 'styled-components';
import Ticket from './components/ticket/Ticket';
import { DbContext } from './components/dbContext';
import isTicketsLoaded from './actions/isTicketsLoaded';
import CheckBox from './components/filter/checkBoxFilter/CheckBox';


const MainWrapper = styled.section`
  max-width: 960px;
  width:100%;
  display:grid;
  grid-template-columns: repeat(2, auto);
  margin:160px auto;
  position:relative;
`;
const TicketsWrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr;
`;
const MainPage = () => {
  const { data } = useContext(DbContext);
  // eslint-disable-next-line global-require
  const uniqid = require('uniqid');
  return (
    <MainWrapper>
      <CheckBox />
      <TicketsWrapper>
        <div>Filter will be here</div>
        {data ? isTicketsLoaded(data, uniqid, Ticket)
          : <div>Loading ...</div>}
      </TicketsWrapper>
    </MainWrapper>
  );
};

export default MainPage;
