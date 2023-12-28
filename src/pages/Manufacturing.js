import React from 'react'


const Manufacturing = () => {
  return (
    < div className='bg-white'>
      <div className="container text-center pt-3">
        <div className="row justify-content-md-center">
          <div className="col col-lg-3 hr-line ">
            <hr />
          </div>
          <div className="col-md-auto" style={{ fontFamily: 'Georgia, serif' }}>
            <h3>OVERVIEW</h3>
          </div>
          <div className="col col-lg-3 hr-line">
            <hr />
          </div>
        </div>
      </div>
      <div className='container ' style={{ paddingRight: "120px", paddingLeft: "120px" }}>
        <p className='pb-2'>At Boss Groups, our service is tailored for your manufacturing needs including low-volume production of end-use parts, bridge tooling before high-volume production, customization of product,  and functional prototyping.</p>
        <p className="">
          We have partnered up with many fabricating & machining houses with highly skill labors and state of the art equipment to provide high quality manufacturing service.
        </p>
        <div className="row ">
          <div className="col-6  ">
            <div className='m-4  m1-img '>
              <div className='' style={{ paddingTop: "254px" }}>
                <h4 className='bg-white' style={{ width: "150px" }}>Machining</h4>
                Want a reliable, quick-turn supplier of machined plastic and metal components? With our strong fabricating & machining houses network having highly skill labors and state of the art equipment ensures your parts are shipped on-time, every time. At Boss Groups, our network of facilities are capable of doing both rapid prototyping and low and high volume production of end-use components.
              </div>
            </div>
            <br />
            <div className='m-4  m2-img '>
              <div className='' style={{ paddingTop: "254px" }}>
                <h4 className='bg-white' style={{ width: "240px" }}>Injection Molding</h4>
                Boss Groups offers a wide variety of products and services for various industrial applications. Products and services include micro molding, insert/over molding, gears, seals, silicone, assembly, and much more.
              </div>
            </div>
          </div>

          <div className="col-6  ">
            <div className='m-4  m3-img '>
              <div className='' style={{ paddingTop: "254px" }}>
                <h4 className='bg-white' style={{ width: "220px" }}>Steel Fabrication</h4>
                Boss Groups offers steel fabrication services for light to medium industrial applications. Products and services include Pallets, Trolleys, welding/assembly, Panels and much more.
              </div>
            </div>
            <br />
            <div className='m-4  m4-img '>
              <div className='' style={{ paddingTop: "254px" }}>
                <h4 className='bg-white' style={{ width: "300px" }}>Additive Manufacturing</h4>
                Additive manufacturing for precision prototypes and end-use production parts. Our industrial 3D printing service ensures accuracy, so you get highly precise parts. At Boss Groups, we do additive manufacturing for functional prototypes, complex designs, and production components in a quick turnaround time.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Manufacturing