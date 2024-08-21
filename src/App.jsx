import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from './Components/Login/Login';
import { UserStorage } from "./UserContext";
import User from './Components/User/User';
import ProtectedRoute from './Helper/ProtectedRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="conta/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
          </Routes>
          <Footer />
          </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
