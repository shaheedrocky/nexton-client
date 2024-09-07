import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../pages/auth/Login";
import Header from "../header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
