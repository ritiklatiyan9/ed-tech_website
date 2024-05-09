import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl mb-4 md:mb-0">Accurate Classes</div>

        <div className='mt-4'>&copy; {new Date().getFullYear()} Accurate Classes. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
