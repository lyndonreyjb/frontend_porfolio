import { useState } from "react";
import { Wrap } from "../wrap";
import "./footer.style.scss";
import { client } from "../../client";
import emailIcon from "../../assets/email.png";
const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = form;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="footer">
      <h1>Have a chat with me</h1>
      <div className="container">
        <div className="contact-email">
          <h3>Contact Me</h3>
          <div className="link">
            <img src={emailIcon} alt="img" />
            <a href="mailto:lyndonrey724@gmail.com" className="text">
              lyndonrey724@gmail.com
            </a>
          </div>
        </div>

        {!isFormSubmitted ? (
          <div className="footer-form">
            <div>
              <label>Your Name:</label>
              <input
                className="footer-text"
                type="text"
                name="name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label>Your Email:</label>
              <input
                className="footer-text"
                type="email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label>Your Message:</label>
              <textarea
                className="footer-text"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button
              type="button"
              className="button-text"
              onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="success-message ">
              Thank you for getting in touch!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wrap(Footer, "contact");
