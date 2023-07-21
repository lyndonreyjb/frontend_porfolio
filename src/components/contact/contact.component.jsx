import "./contact.style.scss";
import { useState } from "react";
import { Wrap } from "../wrap";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    }, 2000);
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
          <h2>Send me a message</h2>
          {!isFormSubmitted ? (
            <form
              action="https://formsubmit.co/lyndonrey724@email.com"
              method="POST"
              className="contact-form">
              <label>Name:</label>
              <input type="text" name="name" required />
              <label>Email:</label>
              <input type="email" name="email" required />
              <label>Message:</label>
              <div>
                <textarea name="message" rows="10" required></textarea>
              </div>
              <button
                type="submit"
                className="button-text"
                onClick={handleSubmit}>
                {!loading ? "Send Message" : "Sending..."}
              </button>
            </form>
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
