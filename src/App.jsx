import React from 'react';
import StoreProvider from './store/StoreProvider.jsx';
import './App.scss';
import 'regenerator-runtime/runtime'
import Header from './components/Header/Header'


const App = () => (

  <StoreProvider>
    <Header />
    {/* <header>hello</header> */}

  </StoreProvider>
);

export default App;