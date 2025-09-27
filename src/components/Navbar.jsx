import React from 'react';

const Navbar = () => {

    return (
        <div className="navbar bg-white shadow-sm">
        <div className='container mx-auto flex items-center'>
          <div className="flex-1">
            <a className="text-2xl font-semibold">CS — Ticket System</a>
          </div>

          <div className="flex-none">
            <div className='flex gap-4 items-center'>
              <ul className='flex gap-4'>
              <li><a className="">Home</a></li>
              <li><a className="">FAQ</a></li>
              <li><a className="">Changelog</a></li>
              <li><a className="">Blog</a></li>
              <li><a className="">Download</a></li>
              <li><a className="">Contact</a></li>
            </ul>

              <button className="bg-gradient-to-r from-[#422AD5] to-[#7e2fa0] px-3 py-2 text-white rounded">+ New Ticket</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;