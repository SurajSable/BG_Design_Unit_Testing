import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <>
      <div >
        <h4 className='text-center text-white mt-5 pt-5' style={{ fontFamily: "Garamond, serif" }}>Welcome to BG Design Systems
          <br />
          For</h4>
        <h1 className='text-center text-white fw-bold  mt-3' style={{ fontFamily: "Georgia, serif", fontSize: "3.5em" }}> Innovative Technological
          <br />
          Solutions</h1>
        <div className=" d-grid gap-2 col-2 mx-auto p-3 mb-5" >

          <ScrollLink to="discovermore" className="btn bg-black text-white ps-3 pe-3 "
            style={{ fontFamily: "Garamond, serif", fontSize: "1.5em", boxShadow: "0px 3px 10px 2px black" }} smooth={true} duration={500}>
            Discover More
          </ScrollLink>
        </div>

        <section className="red-box text-white mt-5 pt-3 pb-3 " id='discovermore'>
          {/* <div className="container text-center text-md-start border border-black "> */}
          {/* Grid row */}
          <div className="row mt-2  ps-5 pe-5"   >
            {/* Grid column */}
            <div className="col mx-auto  d-flex justify-content-center wixui-rich-text__text" style={{ fontFamily: "system-ui" }}>
              {/* Content */}
              <span className="fs-6 gry-text " >
                <span className="fs-5" style={{ color: "white" }} >QUALITY <br /></span>
                We prefer quality over<br /> quantity, this is our "Quality<br />
                Mantra".
              </span>
            </div>
            <div className='vertical-line'></div>
            <div className="col mx-auto wixui-rich-text__text">
              <span className="fs-6 gry-text  ">
                <span className="fs-5 " style={{ color: "white" }} >RESPONSIVE <br /></span>
                Committed to the working <br /> what we are doing and <br />undertaking, and
                deliver the <br />work in timely manner with<br /> full statisfaction
              </span>
            </div>
            <div className='vertical-line'></div>
            <div className="col mx-auto wixui-rich-text__text">
              <span className="fs-6 gry-text ">
                <span className="fs-5 " style={{ color: "white" }} >SUPPORT <br /></span>
                A collection of docs with will <br /> be deliver on completion of<br />
                project&nbsp; to help you achieve.<br />
                Assistance after completion<br />
                can be provided if you need <br />it..
              </span>
            </div>
          </div>
        </section>

        <div className='mt-4'>
          <div className=' '>
            <h5 className='text-center fw-bold mt-3 ' style={{ fontFamily: "Garamond, serif" }}>Few of Our
            </h5>
            <h3 className='text-center fw-bold ' style={{ fontFamily: "Georgia, serif" }}>
              Awesome Client And Business Partners
            </h3>
          </div>
        </div>
        <div className='container ' >
          <div className='row row-cols-3'>
            <div className='   mti-img' > </div>
            <div className='  ssk-img'> </div>
            <div className='  htm-img'></div>
            <div className='  pcs-img'></div>
            <div className='  cas-img'> </div>
            <div className='  pesc-img'> </div>

          </div>
        </div>
        <div className='pb-2'>
          <div className='fai-img '></div>
        </div>
      </div>
    </>
  )
}
export default Home