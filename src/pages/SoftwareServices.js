import React from 'react'

const SoftwareServices = () => {
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
        <p className='pb-2'>The MERN stack is a popular technology stack used for building full-stack web applications.MERN stands for MongoDB, Express.js, React.js, and Node.js.</p>
        <p className="">
        MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.
        </p>
        <div class="row ">
          <div class="col-6  ">
            <div className='m-4  ss1-img '>
              <div className='' style={{ paddingTop: "160px" }}>
                <h4 className='bg-white' style={{ width: "340px" }}>React - A JavaScript library</h4>
                React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.
                <br />
                <br />
                <ul>
                  <li>Single-Page Application (SPA)</li>
                  <li>Responsive UI with Conditional Rendering</li>
                  <li>Component Reusability</li>
                  <li>State Management</li>
                  <li>Testing</li>
                </ul>

              </div>
            </div>
            <br />
            <div className='m-4  ss2-img '>
              <div className='' style={{ paddingTop: "175px" }}>
                <h4 className='bg-white' style={{ width: "350px" }}>MongoDB</h4>
                MongoDB is a cross-platform, document oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on concept of collection and document. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. 
              </div>
            </div>
          </div>

          <div class="col-6  ">
            <div className='m-4  ss3-img '>
              <div className='' style={{ paddingTop: "200px" }}>
                <h4 className='bg-white' style={{ width: "280px" }}>Express - Node.js web application framework</h4>
                Node.js and Express.js form a powerful stack for building scalable and efficient web applications, particularly in scenarios where a lightweight and flexible framework is preferred. Node.js handles the runtime environment, while Express.js provides a structured and convenient way to build web applications and APIs on top of Node.js. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
              </div>
            </div>
            <br />
            <div className='m-4  ss4-img '>
              <div className='' style={{ paddingTop: "225px" }}>
                <h4 className='bg-white' style={{ width: "100px" }}>DevOps</h4>
                DevOps is a set of practices, principles, and cultural philosophies that aim to improve collaboration and communication between software development (Dev) and IT operations (Ops) teams. The goal is to enhance the efficiency, reliability, and speed of delivering software and services. DevOps involves the integration of people, processes, and technology across the software development lifecycle.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SoftwareServices