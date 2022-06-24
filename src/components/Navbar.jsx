import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleNavBackground = () => {
    if (window.scrollY >= 90) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener('scroll', toggleNavBackground);

  return (
    <div
      className={`w-full top-0 sticky z-20 ${navColor ? 'bg-black/90' : ''}`}
    >
      <div className='text-white flex justify-between items-center h-20 mx-auto max-w-[1240px] px-4'>
        <h1 className='text-3xl font-bold text-green-400 cursor-not-allowed'>
          Data<span className='text-white'>Fin</span>
          <span className='text-yellow-300'>.</span>
        </h1>
        <ul className='hidden md:flex md:items-center'>
          <li className='p-4 cursor-pointer'>Home</li>
          <li className='p-4 cursor-pointer'>Service</li>
          <li className='p-4 cursor-pointer'>Newsletter</li>
          <li className='p-4 cursor-pointer'>Pricing</li>
          <li className='p-4 cursor-pointer'>Contact Us</li>
          <li className='p-4 cursor-pointer'>
            <button className='px-6 h-10 bg-gradient-to-r from-green-400 to-yellow-300 text-black rounded-md font-semibold border border-green-400 hover:shadow-lg hover:shadow-yellow-300'>
              Log in
            </button>
          </li>
        </ul>
        <div onClick={handleNav} className='md:hidden'>
          {!nav ? (
            <RiMenu3Fill size={20} className='ease-in-out duration-500' />
          ) : (
            <RiCloseFill size={20} className='ease-in-out duration-500' />
          )}
        </div>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-2/3 border-r-gray-700 h-full border-r bg-[#000300] ease-in-out duration-1000 md:hidden'
              : 'fixed hidden'
          }
        >
          <h1 className='text-3xl font-semibold text-green-400 m-4'>Menu</h1>
          <ul className='pt-5 uppercase'>
            <li className='p-4 border-b border-gray-500 cursor-pointer'>
              Home
            </li>
            <li className='p-4 border-b border-gray-500 cursor-pointer'>
              Service
            </li>
            <li className='p-4 border-b border-gray-500 cursor-pointer'>
              Newsletter
            </li>
            <li className='p-4 border-b border-gray-500 cursor-pointer'>
              Pricing
            </li>
            <li className='p-4 border-b border-gray-500 cursor-pointer'>
              Contact Us
            </li>
            <li className='p-4'>
              <button className='px-6 h-10 bg-gradient-to-r from-green-400 to-yellow-300 text-black rounded-md font-semibold border border-green-400 hover:shadow-lg hover:shadow-yellow-300'>
                Log in
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
