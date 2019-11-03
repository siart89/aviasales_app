import React, { useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Ticket from './Ticket';
import { DbContext } from '../dbContext';
import ErrorPage from '../support/Error';
import Loading from '../support/Loading';
import sortData from '../../actions/sortData';
import filterByCheapQuick from '../../actions/filterByCheapQuick';


const TicketsList = () => {
  const { data } = useContext(DbContext);
  const filter = useSelector((state) => state.change);
  const [afterSort, setAfterSort] = useState([]);
  // eslint-disable-next-line global-require
  const uniqid = require('uniqid');

  useEffect(() => {
    // geting data after checkboxfilter
    const filtered = sortData(data, filter.activeFilter);
    // setting data after checkboxfilter and buttonFilter
    setAfterSort(filterByCheapQuick(filtered, filter.comfort));
  }, [data, filter.activeFilter, filter.comfort]);

  if (data === 'ERROR') {
    return (
      <ErrorPage />
    );
  }

  return (
    <>
      {
        afterSort
          ? afterSort.map((item, ind) => {
            const key = uniqid();
            while (ind <= 5) {
              return <Ticket key={key} infoArr={item} />;
            } return null;
          })
          : <Loading />
      }

    </>
  );
};

export default TicketsList;
