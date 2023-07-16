import "./contact.style.scss";
import { useState } from "react";
import { Wrap } from "../wrap";
import { client } from "../../client";
import { MdEmail } from "react-icons/md";

const Contact = () => {
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
    <div className="contact">
      <div className="contact-container">
        <div className="chat-container">
          <div>
            <div>
              <h1>Any questions?</h1>
              <h1>Have a chat with me</h1>
            </div>
            <div className="mail-box">
              <MdEmail className="email-icon" />
              <div className="mail-to">
                <a href="mailto:lyndonrey724@gmail.com">
                  <h3>Mail me at</h3>
                  lyndonrey724@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="email-container">
          <h3>Send me a message</h3>
          {!isFormSubmitted ? (
            <div className="contact-form">
              <div>
                <label>Your Name:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <label>Your Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <label>Your Message:</label>
                <textarea
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
    </div>
  );
};

export default Wrap(Contact, "contact");
