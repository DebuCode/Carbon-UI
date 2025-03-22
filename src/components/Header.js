import React from 'react';

function Header() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center">
        <div className="mb-4 w-full md:w-3/5 flex justify-center md:flex-1 md:flex md:justify-center">
          <nav className="flex flex-wrap justify-center md:space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900 mx-2 md:mx-0 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 mx-2 md:mx-0 font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 mx-2 md:mx-0 font-medium">Blog</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 mx-2 md:mx-0 font-medium">About Us</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 mx-2 md:mx-0 font-medium">Contact</a>
          </nav>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="bg-green-200 text-white font-bold py-2 px-4 md:px-6 rounded">
            <p className='text-green-600'>Login</p>
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Book Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;