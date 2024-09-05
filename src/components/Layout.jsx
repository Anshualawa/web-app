import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-100 p-4">{children}</main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        © 2024 Alawa App
      </footer>
    </div>
  );
};

export default Layout;
