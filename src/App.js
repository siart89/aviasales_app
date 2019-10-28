import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store/store';
import CheckBox from './components/filter/checkBoxFilter/CheckBox';
import { ContextProvider } from './components/dbContext';
import GetData from './components/dbContext/getData';

function App() {
  return (
    <Provider store={store}>
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
