import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'



const Navbar = () => {
  const location = useLocation();
  // console.log(location.pathname)
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="py-3"
    >
      <nav className="navbar navbar-expand-lg p-2  bg-black border-bottom border-body" data-bs-theme="dark"  >
        <div className="container-fluid  ms-5">
          <div style={{
            padding: '0px 50px 0px 0px',
            margin: '0px',
            display: 'block',
          }} className=''>
            <Link to="https://bossindustrialdesi.wixsite.com/bgds" target="_blank" className="wixui-rich-text__text link-offset-2 link-underline link-underline-opacity-0">
              <img
                src="https://5.imimg.com/data5/SELLER/Logo/2020/10/HF/FR/UL/113674269/untitled-1-120x120.jpg"
                alt="Logo"
                width={66}
                height={66}
                className="rounded-circle"
              />
              <span style={{ color: '#E21C21', fontFamily: "Garamond, serif" }} className="wixui-rich-text__text ms-2  fs-3 fw-bolder ">BG</span>
              <span className="text-white wixui-rich-text__text fs-3 fw-bolder">Design Systems</span>
            </Link>
          </div>

          <div className="divnav me-5 pe-5 " >
            <ul className="navbar-nav ms-auto  ">
              <li className={`nav-item m-4 border border-black  `}>
                <Link className={`nav-link ${location.pathname === '/' ? 'active text-dark bg-white' : ''}`} style={{ fontFamily: 'Arial' }} to="/">Home</Link>
              </li>

              <li
                className="nav-item m-4 border border-black position-relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className={`nav-link ${location.pathname === '/services' ? 'active text-dark bg-white' : ''}`}
                  style={{ fontFamily: 'Arial' }}
                  to="/services"
                >
                  Services
                </Link>

                {isHovered && (
                  <div
                    className=" list-none  text-white bg-opacity-75 bg-black text-center  position-absolute start-50 translate-middle-x pt-2 list-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ width: "160px" }}
                  >
                    <div className='nav-item p-1'>
                      <Link to="/manufacturing" className="text-white inline-block link-underline link-underline-opacity-0">
                        Manufacturing
                      </Link>
                    </div>
                    <div className='nav-item p-1'>
                      <Link to="/engineering-services" className="text-white link-underline link-underline-opacity-0 inline-block mt-2">
                        Engineering Services
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              <li className="nav-item m-4 border border-black ">
                <Link className={`nav-link ${location.pathname === '/about' ? 'active text-dark bg-white' : ''}`} style={{ fontFamily: 'Arial' }} to="/about">About Us</Link>
              </li>
              <li className="nav-item m-4 border border-black ">
                <Link className={`nav-link ${location.pathname === '/gallery' ? 'active text-dark bg-white' : ''}`} style={{ fontFamily: 'Arial' }} to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item m-4 border border-black ">
                <Link className={`nav-link ${location.pathname === '/contact' ? 'active text-dark bg-white' : ''}`} style={{ fontFamily: 'Arial' }} to="/contact">Contact Us</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar