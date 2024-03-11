import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import './css/App.scss';
import Header from './layout/Header';
import Home from './view-components/Home';
import About from './view-components/About';
import Store from './view-components/Store';
import Footer from './layout/Footer';
import PageNotFound from './view-components/PageNotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
        <Route path='/**/' element={<PageNotFound />} />
      </Routes>  
      <Footer />    
    </>
  );
}

export default App;
