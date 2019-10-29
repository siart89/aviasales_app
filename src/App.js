import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from './components/store/store';
import CheckBox from './components/filter/checkBoxFilter/CheckBox';
import { ContextProvider } from './components/dbContext';
import GetData from './components/dbContext/getData';


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap&subset=cyrillic');
  body {
    font-family: 'Open Sans', sans-serif;
    background-color:#E5E5E5;
    background:#F3F7FA;
  }
  *{
    box-sizing:border-box;
    padding:0;
    margin:0
  }
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ContextProvider>
        <div className="App">
          <GetData />
          <CheckBox />
        </div>
      </ContextProvider>

    </Provider>
  );
}

export default App;
