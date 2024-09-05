import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, HomeIcon, InformationCircleIcon, PhoneIcon, PencilSquareIcon, ComputerDesktopIcon, PaintBrushIcon, VideoCameraIcon, FilmIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMenuClick = (menu) => setActiveMenu(menu === activeMenu ? '' : menu);

  return (
    <nav className="bg-blue-600 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <h1 className="text-lg font-bold">Alawa App</h1>
        <button
          className="sm:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      <div className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'} mt-4 sm:mt-0`}>
        <Link to="/" className="flex items-center text-white hover:text-gray-300 px-4 py-2">
          <HomeIcon className="w-5 h-5 mr-2" />
          Home
        </Link>
        <Link to="/about" className="flex items-center text-white hover:text-gray-300 px-4 py-2">
          <InformationCircleIcon className="w-5 h-5 mr-2" />
          About
        </Link>
        <Link to="/contact" className="flex items-center text-white hover:text-gray-300 px-4 py-2">
          <PhoneIcon className="w-5 h-5 mr-2" />
          Contact
        </Link>

        {/* Design Menu */}
        <div className="relative">
          <button
            className="flex items-center text-white hover:text-gray-300 px-4 py-2"
            onClick={() => handleMenuClick('design')}
          >
            <PencilSquareIcon className="w-5 h-5 mr-2" />
            Design
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          </button>
          {activeMenu === 'design' && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
              <Link to="/design/graphic" className="flex items-center px-4 py-2 hover:bg-gray-200">
                <PaintBrushIcon className="w-5 h-5 mr-2" />
                Graphic Design
              </Link>
              <Link to="/design/uiux" className="flex items-center px-4 py-2 hover:bg-gray-200">
                <ComputerDesktopIcon className="w-5 h-5 mr-2" />
                UI/UX Design
              </Link>
              <Link to="/design/illustration" className="flex items-center px-4 py-2 hover:bg-gray-200">
                <PencilSquareIcon className="w-5 h-5 mr-2" />
                Illustration
              </Link>
            </div>
          )}
        </div>

        {/* Video Graphics Menu */}
        <div className="relative">
          <button
            className="flex items-center text-white hover:text-gray-300 px-4 py-2"
            onClick={() => handleMenuClick('videoGraphics')}
          >
            <VideoCameraIcon className="w-5 h-5 mr-2" />
            Video Graphics
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          </button>
          {activeMenu === 'videoGraphics' && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
              <Link to="/video/animation" className="flex items-center px-4 py-2 hover:bg-gray-200">
                <FilmIcon className="w-5 h-5 mr-2" />
                Animation
              </Link>
              <Link to="/video/editing" className="flex items-center px-4 py-2 hover:bg-gray-200">
                <VideoCameraIcon className="w-5 h-5 mr-2" />
                Video Editing
              </Link>
              <Link to="/video/production" className="flex items-center px-4 py-2 hover:bg-gray-200">
                <FilmIcon className="w-5 h-5 mr-2" />
                Video Production
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
