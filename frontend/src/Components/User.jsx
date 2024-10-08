import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const User = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setError('Invalid username, please enter a valid name.');
    } else {
      setError('');
      navigate('/main', { state: { username } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-center gap-2">
          <img className='h-8' src={logo} alt="Logo" />
          <h1 className="text-2xl font-bold text-white">HashTag</h1>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex items-center justify-center mt-12">
        <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-sm">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              className="mb-4 px-4 py-2 border border-gray-700 rounded w-full bg-gray-900 text-white focus:outline-none focus:border-blue-500"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Submit
            </button>
          </form>
          <p className="text-white mt-4 text-center">
            Don't have a username?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
