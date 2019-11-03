import React, { useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Ticket from './Ticket';
import { DbContext } from '../dbContext';
import ErrorPage from '../support/Error';
import Loading from '../support/Loading';
import sortData from '../../actions/sortData';
import filterByCheapQuick from '../../actions/filterByCheapQuick';
import MoreButton from '../buttons/MoreButton';


const TicketsList = () => {
  const { data } = useContext(DbContext);
  const filter = useSelector((state) => state.change);
  const [amount, setAmount] = useState(5);
  const [finish, setFinish] = useState('');
  const [afterSort, setAfterSort] = useState([]);
  // eslint-disable-next-line global-require
  const uniqid = require('uniqid');

  useEffect(() => {
    if (data && data !== 'ERROR') {
      // geting data after checkboxfilter
      const filtered = sortData(data, filter.activeFilter);
      // setting data after checkboxfilter and buttonFilter
      setAfterSort(filterByCheapQuick(filtered, filter.comfort));
    }
  }, [data, filter.activeFilter, filter.comfort]);

  useEffect(() => {
    if (afterSort.length > 0 && amount >= afterSort.length) {
      setAmount(afterSort.length);
      setFinish('Конец');
    } else setFinish('');
  }, [amount, afterSort]);

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
            while (ind < amount) {
              return <Ticket key={key} infoArr={item} />;
            } return null;
          })
          : <Loading />
      }
      <MoreButton
        onClick={() => setAmount(amount + 5)}
        isEnd={finish}
      />
    </>
  );
};

export default TicketsList;
