import React from 'react'

const Engineeringservices = () => {
  return (
    < div className='bg-white'>
      <div class="container text-center pt-3">
        <div class="row justify-content-md-center">
          <div class="col col-lg-3 hr-line ">
            <hr />
          </div>
          <div class="col-md-auto" style={{ fontFamily: 'Georgia, serif' }}>
            <h3>OVERVIEW</h3>
          </div>
          <div class="col col-lg-3 hr-line">
            <hr />
          </div>
        </div>
      </div>

      <div className='container ' style={{ paddingRight: "120px", paddingLeft: "120px" }}>
        <p className='pb-2'>Our Research and Development service ranges from conceptualizing to prototype testing, we are providing a complete solutions in order make our customer to have best of the product that will fulfill more than our requirement.</p>
        <p className="">
          In Boss Groups, we have engineers who can uncover the less known, to develop and give products/ service that offer great value to our customer.
        </p>
\
        <div class="row ">
          <div class="col-6  ">
            <div className='m-4  s1-img '>
              <div className='' style={{ paddingTop: "255px" }}>
                <h4 className='bg-white' style={{ width: "340px" }}>Mechanical Engineering</h4>
                Advance mechanical engineering services that help customers in developing complex mechanical design and products.
                <br />
                <br />
                <ul>
                  <li>Product Design</li>
                  <li>Analysis</li>
                  <li>Product Development</li>
                  <li>Prototyping</li>
                  <li>Testing</li>
                </ul>

              </div>
            </div>
            <br />
            <div className='m-4  s2-img '>
              <div className='' style={{ paddingTop: "255px" }}>
                <h4 className='bg-white' style={{ width: "350px" }}>Injection Molding - Tool design</h4>
                Boss Groups, we have capability starting from DFM of the part till tool design and tool validation. We work in partnership with your team to deliver designs handmade to your requirement.
              </div>
            </div>
          </div>

          <div class="col-6  ">
            <div className='m-4  s3-img '>
              <div className='' style={{ paddingTop: "255px" }}>
                <h4 className='bg-white' style={{ width: "280px" }}>Special Purpose Machine</h4>
                Special Purpose Machines offer remarkable scope for high & low volume production at low investment and at low cost of production. Our specially designed tooling and fixture, dedicated for mass producing the same component all day long with no special care which complies with all industry standards.
              </div>
            </div>
            <br />
            <div className='m-4  s4-img '>
              <div className='' style={{ paddingTop: "255px" }}>
                <h4 className='bg-white' style={{ width: "100px" }}>IoT</h4>
                Our internet of things (IoT) solutions will align to industry needs and will help our organization to stay always up to date in the market. Our solution is tailored to the unique needs of products, user and operations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Engineeringservices