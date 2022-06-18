import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Users from "../Pages/Users";

export const MainRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/register" element={ <Register/> } />
          <Route path="/dashboard" element={ <Dashboard/> } />
          <Route path="/dashboard/users" element={ <Users/> } />
        </Routes>
     
    </Router>
  );
};