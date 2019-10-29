import { useContext, useEffect } from 'react';
import { DbContext } from '.';

const GetData = () => {
  const { setData } = useContext(DbContext);

  useEffect(() => {
    const upDate = async () => {
      try {
        const keyResponse = await fetch('https://front-test.beta.aviasales.ru/search');
        const key = await keyResponse.json();
        const ticketResp = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${key.searchId}`);
        const data = await ticketResp.json();
        await setData(data);
      } catch (err) {
        setData('ERROR');
      }
    };
    upDate();
  }, [setData]);


  return (
    null
  );
};

export default GetData;
