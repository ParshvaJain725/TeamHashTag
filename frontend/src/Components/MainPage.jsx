import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
const MainPage = () => {
  const location = useLocation();
  const { username } = location.state || { username: 'Guest' };
  const navigate = useNavigate();

  const sections = [
    { title: 'Coding Playground', path: '/playground', description: 'Write and execute code with custom inputs.' },
    { title: 'Coding Arena', path: '/arena', description: 'Practice coding by solving various problems.' },
    { title: 'Coding Battleground', path: '/battleground', description: 'Compete in coding contests and see real-time leaderboards.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-center gap-2">
          <img className='h-8' src={logo} alt="" />
          <h1 className="text-2xl font-bold text-white">HashTag</h1>
        </div>
      </nav>

      {/* Welcome Message */}
      <div className="flex items-center justify-center mt-12">
        <h2 className="text-3xl font-bold">Welcome, {username}!</h2>
      </div>

      {/* Card Section */}
      <div className="flex justify-center mt-12 space-x-4">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => navigate(section.path)}
          >
            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
            <p className="text-gray-300">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
