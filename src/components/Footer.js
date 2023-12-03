import React from 'react'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
    >
      <section className="red-box text-white p-4 ">
        {/* <div className="container text-center text-md-start border border-black "> */}
        {/* Grid row */}
        <div className="row ps-5 pe-5 "   >
          {/* Grid column */}
          <div className="col mx-auto  d-flex justify-content-center wixui-rich-text__text" style={{ fontFamily: "system-ui" }}>
            {/* Content */}
            <span className="fs-6 gry-text " >
              <span className="fs-5" style={{ color: "white" }} ><LocalPhoneOutlinedIcon /> CALL US <br /></span>
              Ph:+91-9176947340
            </span>
          </div>
          <div className='vertical-line2'></div>

          <div className="col mx-auto wixui-rich-text__text ps-4">
            <span className="fs-6 gry-text  ">
              <span className="fs-5 " style={{ color: "white" }} >
                <EmailOutlinedIcon />EMAIL <br /></span>
              <Link to="https://mail.google.com" className='text-white' > info@bgdesignsystem.com </Link>
            </span>
          </div>

          <div className='vertical-line2'></div>

          <div className="col mx-auto wixui-rich-text__text ps-4">
            <span className="fs-6 gry-text ">
              <span className="fs-5 " style={{ color: "white" }} >< AccessTimeOutlinedIcon /> WORKING HOURS <br /></span>
              Mon - Fri: 8am - 10pm
            </span>
          </div>
        </div>

      </section>

      <section className=" text-white bg-black bg-opacity-75 footer" >
        <div className="container text-center text-md-start ">
          {/* Grid row */}
          <div className="row pt-5 pb-5">
            {/* Grid column */}

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <div className="col mx-auto wixui-rich-text__text">
                <span className="fs-6 gry-text  ">
                  <span className="fs-5 " >EXPERIENCE<br /></span>

                  "We are engineers by <br />passion not only by<br /> profession"<br />
                  - BG Teams
                </span>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <div className="col mx-auto wixui-rich-text__text">
                <span className="fs-6 gry-text  ">
                  <span className="fs-5 " >OUR SERVICES<br /></span>
                  - Engineering Services <br />
                  - Manufacturing <br />
                  - Sustenance Support<br />
                  - Software Services
                </span>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <div className="col mx-auto wixui-rich-text__text">
                <span className="fs-6 gry-text ">
                  <span className="fs-5 ">VISIT US<br /></span>
                  No:134/15 SIDCO NP IE,<br />
                  Ambattur,Chennai,<br />
                  Tamilnadu.<br />
                  Pin Code - 600098
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='ps-5 ms-5 ' >
          <div className='pt-2 pb-5 ps-5  '>
            <Link to="https://www.facebook.com/" className='p-2'><img src=' https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png' alt='facebook'></img>
            </Link>
            <Link to="https://www.twitter.com" className='p-2'><img src=' https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c4b521dd2404cd5a05ed6115f3a0dc8.png' alt='twitter'></img>
            </Link>
            <Link to="https://www.youtube.com" className='p-2'><img src=' https://static.wixstatic.com/media/a1b09fe8b7f04378a9fe076748ad4a6a.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a1b09fe8b7f04378a9fe076748ad4a6a.png' alt='youtube'></img>
            </Link>
            <Link to="https://www.instagram.com" className='p-2' ><img src='https://static.wixstatic.com/media/fb5d18fdfff64a56a7e136d2016a1b7b.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fb5d18fdfff64a56a7e136d2016a1b7b.png' alt='instagram'></img>
            </Link>
          </div>
        </div>
      </section>


      <div className="text-center p-3"
        style={{ backgroundColor: "rgba(36,35,35,1)" }}>
        <span className=" wixui-rich-text__text gry-text">
          © {new Date().getFullYear()} Copyright  BG Design Systems - All Rights Reserved.
        </span>
      </div>

    </footer>

  )
}

export default Footer