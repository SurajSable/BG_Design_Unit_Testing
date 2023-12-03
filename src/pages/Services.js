import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
const Services = () => {
  const [isHovered, setIsHovered] = useState({
    manufacturing: false,
    engineering: false,
    devlopment: false
  });

  const handleMouseEnter = (e) => {
    setIsHovered({ ...isHovered, [e]: true });
  };

  const handleMouseLeave = () => {
    setIsHovered({
      manufacturing: false,
      engineering: false,
      devlopment: false
    });
  };
  return (
    <>
      <div className='bg-white'>
        <div class="container pb-5">
          <div class="row  pt-5">
            <div class="col-8 ">
              <h4 className='pt-4' style={{ fontFamily: 'Georgia, serif' }}><b>OUR SERVICES IS DESIGNED TO HELP YOUR BUSINESS <br />
                <p className='text-center' >MAKE AN IMPACT </p></b> </h4>
              <p style={{ fontSize: "18px" }} className='ps-4 pb-2'>
                We offer professional services to help our client attract more business and keep them us! More than that, we approach all of our clients with a complete strategy to turn our client requirement into reality.
              </p>
              <h5 style={{ fontSize: "18px" }} className='ps-4'>
                We can help! We are passionate about the work what we are doing and that is help us to attract and retain clients with a long lasting healthy bond.
              </h5>

              <div className='d-flex justify-content-center'>
                <ScrollLink to="knowmore"
                  className="btn know-more link-underline-opacity-0 rounded-pill"
                  smooth={true} duration={500}>
                  Know more
                </ScrollLink>
              </div>

            </div>
            <div class="col-4  ">
              <div className='hexagonalarea1'>
                <div className='hexagonser hexa1'>
                </div>
                <div className='hexagonser hexa2'>
                </div>
                <div className='hexagonser hexa3'>
                </div>
              </div>
\              <div className='hexagonalarea2'>
                <div className='hexagonser hexa4'>
                </div>
                <div className='hexagonser hexa5'>
                </div>
              </div>

              <div className='hexagonalarea1'>
                <div className='hexagonser hexa6'>
                </div>
                <div className='hexagonser hexa7'>
                </div>
                <div className='hexagonser hexa8'>
                </div>
              </div>

              <div className='hexagonalarea2 '>
                <div className='hexagonser hexa9'>
                </div>
                <div className='hexagonser hexa10'>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='line-serv text-center' style={{ fontFamily: 'Georgia, serif' }} id='knowmore'><h3>OUR KEY SERVICES</h3></div>
        <div className='bg-white container  '>
          <div className='row  '>

            <div className='col-4  p-5' >
              <div style={{ height: "100%" }} onMouseOver={() => { handleMouseEnter("manufacturing") }} onMouseLeave={handleMouseLeave}>
                {isHovered.manufacturing ? <div className=" bg-opacity-75 " style={{ fontFamily: 'Georgia, serif', backgroundColor: "#F78181", height: "100%" }}>

                  <div className='hexagon-container' >
                    <svg >
                      <path />
                    </svg>
                    <img />
                  </div>
                  <div className='text-center  '>
                    <Link to="/manufacturing" style={{ fontFamily: 'Georgia, serif' }} className=' text-white '> <h4>Discover More</h4></Link>
                    <h4 className=' pt-2' >Manufacturing Service</h4><br />
                  </div>
                </div>
                  : <><div className='hexagon-container ' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="180px" height="198px" fill="currentColor" className="bi bi-hexagon container hexagon-svg" viewBox="0 0 16 16">
                      <path d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z" />
                    </svg>
                    <img className='hexagon-image' src='https://static.wixstatic.com/media/161409_c6c90ba020d44a12b0d3b5a1609313ca~mv2.png/v1/fill/w_186,h_185,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Manufac.png' width={124}
                      height={123} alt='Manufacturing' />
                  </div>
                    <div className='text-center  '>
                      <h4 className=' pt-2' style={{ fontFamily: 'Georgia, serif' }}>Manufacturing Service</h4><br />
                      <p >Our affordable manufacturing and quick turnaround times help you reduce design risks and limit overall production costs along every step of the product cycle.</p>
                    </div>
                  </>}
              </div>
            </div>

            <div className='col-4  p-5'>
              <div style={{ height: "100%" }} onMouseOver={() => { handleMouseEnter("engineering") }} onMouseLeave={handleMouseLeave}>
                {isHovered.engineering ? <div className=" bg-opacity-75 " style={{ fontFamily: 'Georgia, serif', backgroundColor: "#F78181", height: "100%" }}>

                  <div className='hexagon-container' >
                    <svg >
                      <path />
                    </svg>
                    <img />
                  </div>
                  <div className='text-center  '>
                    <Link to="/engineering-services" style={{ fontFamily: 'Georgia, serif' }} className=' text-white '> <h4>Discover More</h4></Link>
                    <h4 className=' pt-2' >Engineering and R&D Services</h4><br />
                  </div>
                </div>
                  :
                  <> <div className='hexagon-container '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="180px" height="198px" fill="currentColor" className="bi bi-hexagon container hexagon-svg" viewBox="0 0 16 16">
                      <path d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z" />
                    </svg>
                    <img className='hexagon-image' src='https://static.wixstatic.com/media/161409_84c7e0e9f2e449a8870d26f742118c14~mv2.png/v1/fill/w_192,h_192,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/R%26D.png' width={124}
                      height={123} alt='Manufacturing' />
                  </div>
                    <div className='text-center'>
                      <h4 className=' pt-2' style={{ fontFamily: 'Georgia, serif' }}>Engineering and R&D Services</h4>
                      <p >From conceptualizing,&nbsp;product designing to product development, we are providing a complete&nbsp;solutions&nbsp;in order to make our client to have&nbsp;best of the product that will fulfill&nbsp;more than there&nbsp;requirement.</p>
                    </div>
                  </>}
              </div>
            </div>

            <div className='col-4  p-5' >
              <div style={{ height: "100%" }} onMouseOver={() => { handleMouseEnter("devlopment") }} onMouseLeave={handleMouseLeave}>
                {isHovered.devlopment ? <div className=" bg-opacity-75 " style={{ fontFamily: 'Georgia, serif', backgroundColor: "#F78181", height: "100%" }}>
                  <div className='hexagon-container' >
                    <svg >
                      <path />
                    </svg>
                    <img />
                  </div>
                  <div className='text-center  '>
                    <Link to="/engineering-services" style={{ fontFamily: 'Georgia, serif' }} className=' text-white '> <h4>Discover More</h4></Link>
                    <h4 className=' pt-2' >Software development Services</h4><br />
                  </div>
                </div>
                  : <> <div className='hexagon-container '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="185px" height="200px" fill="currentColor" className="bi bi-hexagon container hexagon-svg" viewBox="0 0 16 16">
                      <path d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z" />
                    </svg>
                    <img className='hexagon-image pt-3' src='https://static.wixstatic.com/media/161409_6c8af8d4bf2c48f6a0edacd21436d3c9~mv2.png/v1/fill/w_182,h_158,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Software%20develope.png' width={122}
                      height={115} alt='Manufacturing' />
                  </div>
                    <div className='text-center'>
                      <h4 className=' pt-2' style={{ fontFamily: 'Georgia, serif' }}>Software development Services</h4>
                      <p >BG Design Systems offers expertise in development, management and system integration for complex application development across all industries, offering the customer a value service.</p>
                    </div>
                  </>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Services