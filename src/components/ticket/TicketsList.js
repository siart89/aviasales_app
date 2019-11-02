import React, { useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Ticket from './Ticket';
import { DbContext } from '../dbContext';
import ErrorPage from '../support/Error';
import Loading from '../support/Loading';


const TicketsList = () => {
  const { data } = useContext(DbContext);
  const filter = useSelector((state) => state.change);
  const [afterSort, setAfterSort] = useState([]);
  // eslint-disable-next-line global-require
  const uniqid = require('uniqid');

  const sortData = (arr, value) => {
    const forSort = [];
    if (+value.activeFilter !== 999) {
      arr.tickets.forEach((elem) => {
        if (elem.segments[0].stops.length === elem.segments[1].stops.length) {
          elem.segments.forEach((segment) => {
            if (+segment.stops.length === value.activeFilter) {
              forSort.push(elem);
            }
          });
        }
      });
      console.log(forSort);
      setAfterSort(forSort);
      return;
    }
    setAfterSort(arr.tickets);
  };

  useEffect(() => {
    sortData(data, filter);
  }, [data, filter]);

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
