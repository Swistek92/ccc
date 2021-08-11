import React from 'react';
import StoreProvider from './store/StoreProvider.jsx';
import './App.scss';
import 'regenerator-runtime/runtime'

const App = () => (

  <StoreProvider>
    <header>hello</header>
  </StoreProvider>
);

export default App;