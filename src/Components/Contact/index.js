import React, { useState } from "react";
import { useInput } from "../../hook/input-hook/index";
import "./styles.css";

const Contact = () => {
  const {
    value: firstName,
    bind: bindFirstName,
    reset: resetFirstName,
  } = useInput("");

  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");

  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ""
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Submitting Name ${firstName}`);
    console.log(`Submitting Email ${email}`);
    console.log(`Submitting Message ${message}`);
    resetFirstName();
    resetEmail();
    resetMessage();
  };

  return (
    <div className='container-contact'>
      <div className='positionning-div-contact'>Contact</div>
      <div className='content-contact'>
        <form id='contact-form' onSubmit={handleSubmit} method='POST'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' {...bindFirstName} className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              {...bindEmail}
              type='email'
              className='form-control'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              {...bindMessage}
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
