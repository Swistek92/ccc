import React from 'react';
import StoreProvider from './store/StoreProvider.jsx';
import './App.scss';
import 'regenerator-runtime/runtime'
import Header from './components/Header/Header'
import AsideMenu from './components/AsideMenu/AsideMenu.jsx'
import { HashRouter as Router } from "react-router-dom";
import Content from './components/Content/Content.jsx';
const App = () => (

  <StoreProvider>

    <Header />
    <Router>
      <div className="content-wrapper">
        <AsideMenu />
        <Content />
      </div>
    </Router>


  </StoreProvider>
);

export default App;