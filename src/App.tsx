import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RouterComponent from './router';

const App = () => (
  <Provider store={store}>
    <RouterComponent />
  </Provider>
);

export default App;
