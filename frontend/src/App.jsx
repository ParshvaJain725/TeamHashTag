import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './Components/User';
import MainPage from './Components/MainPage';
import Register from './Components/Register';
import CodingPlayground from './Components/CodingPlayground';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/playground" element={<CodingPlayground />} />
      </Routes>
    </Router>
  );
};

export default App;
