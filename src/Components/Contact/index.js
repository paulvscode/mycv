import React, { useState } from "react";
// import { useInput } from "../../hook/input-hook/index";
import "./styles.css";
import { init, sendForm } from "emailjs-com";
import { useForm } from "react-hook-form";
const onSubmit = (data) => console.log(data);

init("user_0CrOptuBnm7Nb076RUCzg");

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    sendForm("default_service", "template_rwzn49c", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div className='container-contact'>
      <div className='positionning-div-contact'>Contact</div>
      <div className='content-contact'>
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            name='user_name'
            ref={register}
            placeholder='Name'
          />
          <br />
          <input
            type='email'
            name='user_email'
            ref={register}
            placeholder='Email'
          />
          <br />
          <textarea name='message' ref={register} placeholder='Message' />
          <br />
          <input type='submit' value='Send' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
