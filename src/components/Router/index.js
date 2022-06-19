import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Users from "../Pages/Users";
import Layout from "../Pages/Layout";

export const MainRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={ <Login/> } />
          <Route path="/register" element={ <Register/> } />
          <Route element={ <Layout/> }> 

          <Route path="/" element={ <Home/> } />
          <Route path="/dashboard" element={ <Dashboard/> } />
          <Route path="/dashboard/users" element={ <Users/> } />
          
          </Route>
        </Routes>
     
    </Router>
  );
};