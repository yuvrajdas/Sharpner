import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import './css/App.scss';
import Header from './layout/Header';
import Store from './view-components/Store';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Store />} />
      </Routes>      
    </>
  );
}

export default App;
