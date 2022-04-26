import React from "react";
import PizzaLeft from "../assets/lamb.jpg";
import "../styles/Contact.css";
import emailjs from 'emailjs-com'
import { useHistory } from 'react-router';


function Contact() {

  const history = useHistory();

  const sendHandler=(event)=>{
    event.preventDefault();
    
    emailjs.sendForm('service_m9pncll','template_dpa9g8u',event.target,
    'WFJtW8YbnjDPJWWxF').then(res=>{
      if (res.ok) {
        alert('your message was sent...');
        history.replace('/contact')
      } 
    }).catch(err=>console.log(err));
}

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST" onSubmit={sendHandler}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="user_email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="messages"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div> 
    </div>
  );
}

export default Contact;
