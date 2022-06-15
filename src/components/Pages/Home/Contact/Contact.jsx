import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
const Contact = () => {
  const navigation = useNavigate();
  const handleSubmit = () => {
    navigation("/");
  };
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form
        action="https://formsubmit.co/083941c043faf87e61aa69bdc3293166"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="text" name="name" id="name" required />
        <input type="email" name="email" id="email" required />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
