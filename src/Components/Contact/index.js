import React, { useState } from "react";
import "./styles.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(
      `Submitting Name ${name}, email ${email} and message ${message}`
    );
  };

  return (
    <div className='container-contact'>
      <div className='positionning-div-contact'>Contact</div>
      <div className='content-contact'>
        <form id='contact-form' onSubmit={handleSubmit} method='POST'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type='text'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className='form-control'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className='form-control'
              rows='5'
            ></textarea>
          </div>
          <button type='submit' className='button-submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
