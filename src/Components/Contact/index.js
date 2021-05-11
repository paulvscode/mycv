import React from "react";
// import { useInput } from "../../hook/input-hook/index";
import "./styles.css";
import { init, sendForm } from "emailjs-com";
import { useForm } from "react-hook-form";

init("user_0CrOptuBnm7Nb076RUCzg");

const Contact = () => {
  const { register, handleSubmit } = useForm();

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
            register={register}
            placeholder='Name'
          />
          <br />
          <input
            type='email'
            name='user_email'
            register={register}
            placeholder='Email'
          />
          <br />
          <textarea
            className='text-area-form'
            name='message'
            register={register}
            placeholder='Message'
          />
          <br />
          <input className='button-submit' type='submit' value='Send' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
