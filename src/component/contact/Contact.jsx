import React from "react";
import "./Contact.css";

import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";

import { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vr3y17e",
        "template_5vsxlyp",
        form.current,
        "nQTP2959lsUArAvK0"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message Sent Successfuly !!')
        },
        (error) => {
          console.log(error.text);
        }
      );
      
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailRead className="contact__option-icon" />
            <h4>Email</h4>
            <h5>pratim592020@gmail.com</h5>
            <a href="mailto:pratim592020@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsappSquare className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 7478363309</h5>
            <a href="http://wa.me/917478363309" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Enter Email" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <input
            type="submit"
            value="Send to Pratim"
            className="btn btn-primary"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
