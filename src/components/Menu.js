import React, { useState } from 'react'
import logo from '../assets/logo.png';



export default function Menu() {

  const [show, setShow] = useState(false);

  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-exo text-white-100 h-24">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-12 items-center">
            <li><a href="/" className="text-blue-100">Home</a></li>
            <li><a href="#about" className="hover:text-blue-100 cursor-pointer">About</a></li>
            <li><a href="#cars" className="hover:text-blue-100 cursor-pointer">Cars</a></li>
            <li><a href="/" className="hover:text-blue-100 cursor-pointer">Download</a></li>
          </ul>
        </nav>

        <div className="">
          <a href='/'>
            <button className="bg-blue-100 hover:bg-black-100 border-2 border-blue-100 hover:text-blue-100 cursor-pointer py-3 px-6 rounded-sm">
              Connect Wallet
            </button>
          </a>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-nutino-sans">
        <a href="/" className="logo w-1/2">
          <img src={logo} alt="Logo" />
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
      </div>

      {show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-exo font-semibold bg-blue-100 z-20" style={{ left: "0" }}>
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <a href="/" className="logo">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer ">
          <a href="/" className="text-lg ml-4 text-white-100 font-semibold">Home</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer ">
          <a href="#about" className="text-lg ml-4 text-white-100 font-semibold">About</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer ">
          <a href="#cars" className="text-lg ml-4 text-white-100 font-semibold">Cars</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer">
          <a href="/" className="text-lg ml-4 text-white-100 font-semibold">Download</a>
        </button>
        <div className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-white-100 text-blue-100">
          <a href='' className="text-lg ml-4 font-semibold">Connect Wallet</a>
        </div>
      </div> : null
      }


    </header >
  )
}
