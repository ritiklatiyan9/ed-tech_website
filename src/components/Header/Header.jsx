import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl ml-4 font-bold">Accurate classes</Link>
        <div>
          <Link to="/contact" className="mx-4">Contact Us</Link>
          <Link to="/about" className="mx-4">About Us</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
