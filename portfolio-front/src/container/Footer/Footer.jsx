import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../assets";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, SetIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const contact = {
      _type: "contact",
      name,
      email,
      message,
    };

    client.create(contact).then((res) => {
      setLoading(false);
      SetIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a Coffee <span>&</span> Chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:minasame3@gmail.com" className="p-text">
            minasame3@gmail.com
          </a>
        </div>

        <div className="app__footer-card" style={{backgroundColor: "#f2f7fb"}}>
          <img src={images.mobile} alt="mobile" />
          <a href="tel:(+20) 120-366-826-1" className="p-text">
            (+20) 120-366-826-1
          </a>
        </div>
      </div>


      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">

          <div className="app__flex">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              className="p-text"
              onChange={handleChangeInput}
              name="name"
            />
          </div>

          <div className="app__flex">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              className="p-text"
              onChange={handleChangeInput}
              name="email"
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "sending..." : "Send Message"}
          </button>
        </div>

      ) :  
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      }

    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);
