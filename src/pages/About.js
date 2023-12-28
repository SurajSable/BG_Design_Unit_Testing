import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className='bg-white'>
      <div className='p-3 '>
        <h2 className='text-center' style={{ fontFamily: 'Georgia, serif' }}>ABOUT US</h2>
      </div>
      <div className='container '>
        <div className='row'>
          <div className='col-8'>
            <div>
              <h4 style={{ fontFamily: 'Georgia, serif' }} className='pb-2'> OVERVIEW</h4>
              <p className="wixui-rich-text__text" style={{ fontSize: 18 }}>
                BG Design Systems offers comprehensive solution for various sectors. We has<br />
                been providing customers with end - to - end solution from product designing
                to <br />analysis, prototyping, testing and validation services. Creativity&nbsp;and
                advanced <br />technology forefront in our thought processes, our endeavor&nbsp;is
                to offer new and <br />better solutions, every time we deliver.&nbsp;&nbsp;&nbsp;
              </p>
            </div>

            <div className='pt-3'>
              <h4 style={{ fontFamily: 'Georgia, serif' }} className='pb-2'> HISTORY</h4>
              <p className="wixui-rich-text__text" style={{ fontSize: 18 }}>
                <b> BG Design Systems</b> is a part of <b>BOSS GROUP </b>
                was established in 2017 by<br /> Mr.R.BASKARAN, a visionary leader who built the
                multi-dimensional enterprise. <br />BG as a group today delivering a wide spectrum
                of products for various sector. It<br /> is a perfect amalgam of people, technology
                and resources reinforced by the <br />advantage of thorough understanding of
                customer
              </p>
            </div>

          </div>
          <div className='col-4 visit-img pb-5 mt-3'>
            <Link to="/contact" className="btn visit-hover p-3 fs-5 " style={{ marginTop: "29px", color: "white" }} role="button"> VISIT US</Link>
          </div>
        </div>

        <div >
          <h4 className='text-center' style={{ fontFamily: 'Georgia, serif', color: 'rgb(137, 21, 25)' }}>VISION</h4>
          <div className="wixui-rich-text__text" style={{ fontSize: 18 }}>"Our Vision is to be a leader in providing innovative solution to all our technological needs. We endeavour to fulfill our
            <div className='text-center'> clients expectations beyond there wildest dreams .." </div></div>
        </div>

        <div className='pt-2 pb-3'>
          <h4 className='text-center' style={{ fontFamily: 'Georgia, serif', color: 'rgb(137, 21, 25)' }}>MISSION </h4>
          <p className="wixui-rich-text__text text-center" style={{ fontSize: 18 }}>We are engineer's by passion not only by profession </p>
        </div>

      </div>
    </div>
  );
};

export default About;
