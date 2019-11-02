import React, { useContext } from 'react';
import Ticket from './components/ticket/Ticket';
import { DbContext } from './components/dbContext';
import isTicketsLoaded from './actions/isTicketsLoaded';
import CheckBox from './components/filter/checkBoxFilter/CheckBox';
import Logo from './Logo.svg';
import ButtonFilter from './components/filter/buttonFilter/ButtonFilter';
import {
  MainWrapper,
  MainContetnBox,
  Img,
  TicketsWrapper,
} from './Styles';
import Loading from './components/support/Loading';

const MainPage = () => {
  const { data } = useContext(DbContext);
  // eslint-disable-next-line global-require
  const uniqid = require('uniqid');
  return (
    <MainWrapper>
      <MainContetnBox>
        <Img src={Logo} alt="Logo" />
        <CheckBox />
        <TicketsWrapper>
          <ButtonFilter />
          {data ? isTicketsLoaded(data, uniqid, Ticket)
            : <Loading />}
        </TicketsWrapper>
      </MainContetnBox>
    </MainWrapper>
  );
};

export default MainPage;
