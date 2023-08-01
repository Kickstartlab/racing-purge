import React from 'react'
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';



export default function Footer() {
  return (

    <footer className='container text-white-100 mx-auto lg:px-20 px-5'>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-start justify-content-center gap-16 font-exo">
       
        <div className="col-span-1">
          <a href="/" className="logo">
            <img src={logo} alt="Logo" />
          </a>
          <p className='py-5 leading-loose text-black-50'>
            Best High Stake Big reward<br></br> racing game out there!
          </p>
        </div>

        <div className="col-span-1">
          <h4 className='lg:text-xl font-semibold mb-5'>
            Company
          </h4>
          <ul>
            <li className='pb-3'>About</li>
            <li>Cars</li>
            <li>Download</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className='lg:text-xl font-semibold mb-5'>
            Information
          </h4>
          <ul>
            <li className='pb-3'>About</li>
            <li>Whitepaper</li>
            <li>Contact Us</li>
            <li>Services</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className='lg:text-xl font-semibold mb-5'>
            Follow Us
          </h4>
          <div className="flex gap-4 justify-start pt-3">
            <a href='/' className="">
              <img src={facebook} alt="discord" />
            </a>
            <a href='/' className="">
              <img src={instagram} alt="telegram" />
            </a>
            <a href='/' className="">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>

      <p className='text-center text-black-50 pt-16 pb-6'>&copy; Racing Purge. All rights reserved</p>
    </footer>
  )
}
