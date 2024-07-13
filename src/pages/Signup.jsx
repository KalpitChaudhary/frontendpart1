import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    window.location.href = '/login'; // Temporary redirection for demonstration
  };

  const containerStyles = {
    background: '#282c34',
    minHeight: '100vh',
    padding: '3rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(10px)',
    animation: 'fadeIn 2s ease-in',
  };

  const contentStyles = {
    textAlign: 'center',
    maxWidth: '700px',
  };

  const titleStyles = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#767fb4',
  };

  const subtitleStyles = {
    marginTop: '1.5rem',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    color: '#e0e0e0',
    fontWeight: '300',
    fontFamily: 'Arial, sans-serif',
    animation: 'slideIn 2s ease-in',
  };

  const formStyles = {
    marginTop: '2.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    animation: 'fadeInUp 2s ease-in-out',
  };

  const inputStyles = {
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s ease-in-out',
  };

  const buttonStyles = {
    background: '#767fb4',
    color: '#ffffff',
    fontWeight: 'bold',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  };

  return (
    <div className="grid grid-cols-2" style={containerStyles}>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        input:focus {
          border-color: #767fb4;
        }

        button:hover {
          background-color: #3f5c99;
        }
      `}</style>
      <div className="min-h-screen flex flex-col justify-center ml-40 px-10">
        <h2 className="text-4xl font-bold text-left text-white">Everyday is </h2>
        <h1 className="text-9xl text-left mb-10 text-orange-500">Holiday </h1>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center px-10">
        <div className="bg-blue-200/40 rounded-xl text-center px-20 py-10 items-center backdrop-blur-[19px]">
          <h1 className="text-4xl font-bold text-center mb-10 text-white">VoyageAI</h1>
          <form onSubmit={handleSubmit} style={formStyles}>
            <div className="flex flex-col">
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyles}
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyles}
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyles}
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={inputStyles}
                required
              />
            </div>
            <button type="submit" style={buttonStyles}>
              Sign Up
            </button>
          </form>
          <p className="text-gray-600 text-center mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
