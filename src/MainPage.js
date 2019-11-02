import React, { useContext } from 'react';
import { DbContext } from './components/dbContext';
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
import TicketsList from './components/ticket/TicketsList';

const MainPage = () => {
  const { data } = useContext(DbContext);
  // eslint-disable-next-line global-require
  return (
    <MainWrapper>
      <MainContetnBox>
        <Img src={Logo} alt="Logo" />
        <CheckBox />
        <TicketsWrapper>
          <ButtonFilter />
          {data ? <TicketsList />
            : <Loading />}
        </TicketsWrapper>
      </MainContetnBox>
    </MainWrapper>
  );
};

export default MainPage;
