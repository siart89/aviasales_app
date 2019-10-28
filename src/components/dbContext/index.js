import React, { createContext, useState } from 'react';

export const DbContext = createContext();

export const ContextProvider = (props) => {
  const [data, setData] = useState('');

  return (
    <DbContext.Provider value={{ data, setData }}>
      {props.children}
    </DbContext.Provider>
  )
}