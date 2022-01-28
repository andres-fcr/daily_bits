import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:endpoint" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
