import React from 'react';
import StoreProvider from './store/StoreProvider.jsx';
import './App.scss';
import 'regenerator-runtime/runtime'
import Header from './components/Header/Header'
import AsideMenu from './components/AsideMenu/AsideMenu.jsx'
import { HashRouter as Router } from "react-router-dom";
const App = () => (

  <StoreProvider>

    <Header />
    <Router>
      <AsideMenu />

    </Router>


  </StoreProvider>
);

export default App;