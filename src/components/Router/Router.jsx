import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../pages/auth/Login";
import Header from "../header/Header";
import Register from "../../pages/auth/Register";
import Footer from "../footer/Footer";
import Home from "../../pages/Home";
import ViewProduct from "../../pages/ViewProduct";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route  path="/product/:id" element={<ViewProduct />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
