import React, { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", subject: "", message: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setData({ name: "", email: "", subject: "", message: "" })
  }
  return (
    <div className='bg-white' >
      <div className='container' style={{ width: "70%", paddingTop: "80px ", fontFamily: 'Georgia, serif', paddingBottom: "100px" }} >
        <h3 className='text-center pe-5 pb-5' style={{ fontFamily: "Georgia, serif" }}><b>CONTACT US TODAY! </b></h3>
        <div className='row'>
          <div className=' col-4  ps-5 ' style={{ fontSize: "13px" }}>
            <div className=' ps-5 '>
              <span style={{ color: 'rgb(206, 32, 38)' }}>Telephone</span><br />
              Ph: +91-9176947340<br />
              Wh: +91-9176947340<br />
            </div>
            <br />
            <div className=' ps-5 '>
              <span style={{ color: 'rgb(206, 32, 38)' }}>Email</span>
              <br />
              info@bgdesignsystems.com
            </div>
            <br />
            <div className='  ps-5'>
              <span style={{ color: 'rgb(206, 32, 38)' }}> Opening Hours</span>
              <br />
              Mon - Fri: 8am - 10pm<br />
              Saturday: 8am - 1pm
            </div>
            <br />
          </div>
          <div className=' col-8  '>
            <form method='post' onSubmit={handleSubmit} >
              <div className=' mb-4 me-5' >
                <input
                  className=""
                  type="name"
                  id="name"
                  name="name"
                  style={{ width: '100%' }}
                  autoComplete="off"
                  placeholder='NAME'
                  onChange={handleChange} value={data.name}
                  required=""
                />
              </div>

              <div className=' mb-4 me-5'>
                <input
                  className=""
                  type="email"
                  id="email"
                  name="email"
                  placeholder='EMAIL'
                  autoComplete="off"
                  required=""
                  onChange={handleChange} value={data.email}
                  style={{ width: '100%' }}
                />
              </div>

              <div className=' mb-4 me-5'>
                <input
                  name="subject"
                  id="input_comp-jxd8ewgx"
                  className="KvoMHf has-custom-focus wixui-text-input__input"
                  type="text"
                  placeholder="Subject"
                  required=""
                  onChange={handleChange} value={data.subject}
                  aria-required="true"
                  autoComplete="off"
                  aria-label="Subject"
                  defaultValue=""
                  style={{ width: '100%' }}
                />
              </div>

              <div className=' mb-3 me-5 '>
                <textarea
                  className=""
                  id="message"
                  name="message"
                  rows="4"
                  placeholder='MESSAGE'
                  autoComplete="off"
                  required=""
                  onChange={handleChange} value={data.message}
                  style={{ width: '100%' }}
                ></textarea>
              </div>
              <button type="button " className="btn btn-danger  float-end " style={{ width: "25%", borderRadius: "0" }}>Submit</button>
            </form>
          </div>

        </div>
      </div>
      {/* ---map--- */}
      <div className='map-box' >
        <div className='text-center ' style={{ paddingTop: "90px", fontSize: "20px" }}>
          GETTING HERE:
        </div>
        <div className='text-center' style={{ paddingTop: "40px", paddingBottom: "30px", fontSize: "20px" }}>
          No:134/15 SIDCO NP IE,Ambattur,Chennai.
        </div>

        <div className='d-flex justify-content-center'>
          <div style={{ width: "75%", height: " 270px", }} >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7796040358107!2d80.17537820860927!3d13.113144011710014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52639395555555%3A0xe49746b4cec729bd!2sBG%20Design%20Systems!5e0!3m2!1sen!2sin!4v1701184517007!5m2!1sen!2sin" style={{ width: "100%", height: "100%" }}  ></iframe>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Contact