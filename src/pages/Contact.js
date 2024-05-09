import React, { useState ,useEffect} from 'react'
import emailjs from '@emailjs/browser';

import {  useParams } from 'react-router-dom';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('');
  const { contactId } = useParams();
  
  useEffect(() => {
    if (contactId) {
      const element = document.getElementById(contactId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [contactId]);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const serviceId = "service_ibg0fk3";
    const templateId = "template_lep28cr";
    const publickKey = 'ajNH14RQiy9ec_uS2';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Bg Design Team",
      to_email: "anjusakhare26101999@gmail.com",
      subject: subject,
      message: message,
      
    }

    emailjs.send(serviceId, templateId, templateParams, publickKey)
      .then((response) => {
        console.log("email sent successfully", response);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }).catch((error) => {
        console.log("error sending email", error)
      });
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

            <form onSubmit={handleSubmit}>
              <div className=' mb-4 me-5' >
                <input
                  className=""
                  type="text"
                  id="name"
                  data-testid="name"
                  name="name"
                  style={{ width: '100%' }}
                  autoComplete="off"
                  placeholder='NAME'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  style={{ width: '100%' }}
                />
              </div>

              <div className=' mb-4 me-5'>
                <textarea
                  name="subject"
                  placeholder='SUBJECT'
                  rows="1"

                  required=""
            
                  autoComplete="off"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
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
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  style={{ width: '100%' }}
                ></textarea>
              </div>
              <button
      type="submit"
      className="btn btn-danger float-end"
      style={{ width: "25%", borderRadius: "0" }}
      disabled={!name || !email || !subject || !message}
    >
      Submit
    </button>
            </form>


          </div>

        </div>
      </div>
      {/* ---map--- */}
      <div className='map-box' id={contactId} >
        <div className='text-center ' style={{ paddingTop: "90px", fontSize: "20px" }}>
          GETTING HERE:
        </div>
        <div className='text-center' style={{ paddingTop: "40px", paddingBottom: "30px", fontSize: "20px" }}>
          No:134/15 SIDCO NP IE,Ambattur,Chennai.
        </div>

        <div className='d-flex justify-content-center'  >
          <div style={{ width: "75%", height: " 270px", }} >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7796040358107!2d80.17537820860927!3d13.113144011710014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52639395555555%3A0xe49746b4cec729bd!2sBG%20Design%20Systems!5e0!3m2!1sen!2sin!4v1701184517007!5m2!1sen!2sin"  style={{ width: "100%", height: "100%" }}  ></iframe>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Contact