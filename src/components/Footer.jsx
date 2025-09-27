import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
    return (
        <footer className='bg-black text-gray-300 px-8 py-12'>
  
    <div className="grid md:grid-cols-5 gap-8 container mx-auto">
          <div>
            <h3 className="text-white font-semibold mb-2">
              CS — Ticket System
            </h3>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm">
              <li className='flex items-center'><FaXTwitter className='bg-white text-black rounded-2xl p-0.5 mt-1 mr-1' /> @CS — Ticket System</li>
              <li className='flex items-center'><FaLinkedinIn className='bg-white text-black rounded-2xl p-0.5 mt-1 mr-1' /> @CS — Ticket System</li>
              <li className='flex items-center'><FaFacebookF className='bg-white text-black rounded-2xl p-0.5 mt-1 mr-1' /> @CS — Ticket System</li>
              <li className='flex items-center'><CgMail className='bg-white text-black rounded-2xl p-0.5 mt-1 mr-1' /> support@cst.com</li>
            </ul>
          </div>
        </div>
        <br />
        <hr className='text-gray-500' />
        <div className="text-left md:text-center text-gray-500 text-sm mt-8">
          © 2025 CS — Ticket System.
          <br className="block md:hidden" /> All rights reserved.
        </div>
  
</footer>
    );
};

export default Footer;