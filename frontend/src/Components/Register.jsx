import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Register = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Placeholder: Check if username is unique (this would involve backend logic)
    const isUnique = true; // Replace with actual uniqueness check

    if (!username) {
      setError('Please enter a username.');
    } else if (!isUnique) {
      setError('Username already taken, please choose another.');
    } else {
      // Save the username to the database or state management
      setError('');
      setSuccess('Username registered successfully!');
      // After successful registration, navigate to the login page or main page
      setTimeout(() => navigate('/'), 2000);
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

      {/* Registration Form */}
      <div className="flex items-center justify-center mt-12">
        <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-sm">
          <form onSubmit={handleRegister} className="flex flex-col items-center">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a Username"
              className="mb-4 px-4 py-2 border border-gray-700 rounded w-full bg-gray-900 text-white focus:outline-none focus:border-blue-500"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
