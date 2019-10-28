import { useContext, useEffect } from 'react';
import { DbContext } from '.';

const GetData = () => {
  const { setData } = useContext(DbContext);

  useEffect(() => {
    const upDate = () => {
      fetch('https://front-test.beta.aviasales.ru/search')
        .then((response) => response.json()).then((result) => {
          fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${result.searchId}`)
            .then((resp) => resp.json()).then((tickets) => setData(tickets))
            .catch(() => setData('ERROR'));
        }).catch(() => setData('ERROR'));
    };
    upDate();
  }, []);


  return (
    null
  );
};

export default GetData;
