import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li>
                <div className="space-y-2">
                  <h4 className="font-bold">Contact Us</h4>
                  <div className="space-y-1  py-2">
                    <p>Phone: +880 19 7411 9333</p>
                    <p>Email: <a href="mailto:rhgcompanies@gmail.com" className="hover:text-blue-400 transition-colors">rhgcompanies@gmail.com</a></p>
                  </div>
                  <div className=' py-2'> 
                    <p>Singapore: 25, Sin Ming Walk, Thomson Grand, Singapore 573917</p>
                  </div>
                  <div className=' py-2'> 
                    <p>Bangladesh: H: 57, Rd: 15/A, Dhanmondi, Dhaka : 1209</p>
                  </div>                 
                </div>
              </li>


            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/web-development" className="hover:text-blue-400 transition-colors">Data Collection & Data Annotation</Link></li>
              <li><Link href="/services/app-development" className="hover:text-blue-400 transition-colors">Generative AI</Link></li>
              <li><Link href="/services/app-development" className="hover:text-blue-400 transition-colors">Computer Vision</Link></li>
              <li><Link href="/services/app-development" className="hover:text-blue-400 transition-colors">NLP</Link></li>
              <li><Link href="/services/app-development" className="hover:text-blue-400 transition-colors">Data Analytics</Link></li>
              <li><Link href="/services/consulting" className="hover:text-blue-400 transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services/consulting" className="hover:text-blue-400 transition-colors">AI Based Web Development</Link></li>
              <li><Link href="/services/consulting" className="hover:text-blue-400 transition-colors">AI Based App Development</Link></li>
              <li><Link href="/services/consulting" className="hover:text-blue-400 transition-colors">DevOPs & MLOps</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Industries</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">Use-Cases</Link></li>
              <li><Link href="/cookies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p>Stay updated with our latest news and offers.</p>
            <form className="flex flex-col lg:-translate-x-0 md:-translate-x-0 lg:flex-row lg:flex-wrap">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 bg-gray-800 text-white lg:rounded-full md:rounded-full rounded-t-md sm:rounded-l-md sm:rounded-tr-none focus:outline-none lg:mb-4 md:mb-4"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 lg:rounded-full md:rounded-full rounded-b-md sm:rounded-r-md sm:rounded-bl-none transition-colors"
                >
                  Subscribe
                </button>
              </form>

            <div className="space-y-4">
            <h3 className="text-xl font-bold">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-blue-400 transition-colors">Cookies</Link></li>
            </ul>
          </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">&copy; 2024 The Data Island. All rights reserved.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
