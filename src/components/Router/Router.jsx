import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../../pages/auth/Login";
import Header from "../header/Header";
import Register from "../../pages/auth/Register";
import Footer from "../footer/Footer";
import Home from "../../pages/Home";
import ViewProduct from "../../pages/ViewProduct";
import Checkout from "../../pages/Checkout";
import { useSelector } from "react-redux";

const Router = () => {
  const { token } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Redirect to home if token exists */}
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />
        {/* Other routes */}
        <Route index path="/" element={<Home />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
