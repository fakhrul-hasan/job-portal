import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-transparent fixed z-40">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a>Browse Job</a>
        </li>
        <li><a>Page</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <Link href='/' className="text-text-color font-bold text-3xl cursor-pointer">newestHire</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className='text-text-color font-semibold text-xl'><a className='hover-effect hover:bg-transparent'>Home</a></li>
        <li className='text-text-color font-semibold text-xl'>
          <a className='hover-effect hover:bg-transparent'>Browse Job</a>
        </li>
        <li className='text-text-color font-semibold text-xl'><a className='hover-effect hover:bg-transparent'>Page</a></li>
        <li className='text-text-color font-semibold text-xl'><a className='hover-effect hover:bg-transparent'>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="mr-2 btn-secondary hover:bg-secondary-color">post a job</button>
    <button className="btn-slide">Log in</button>
  </div>
</div>
    );
};

export default Navbar;