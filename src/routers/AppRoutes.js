import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Preguntas from "../components/Preguntas";
import Registro from "../components/Registro";
import Home from "../container/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:endpoint" element={<Preguntas />} />
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
