import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './Components/User';
import MainPage from './Components/MainPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
