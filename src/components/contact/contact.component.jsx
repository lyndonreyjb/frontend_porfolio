import "./contact.style.scss";
import { useState } from "react";
import { Wrap } from "../wrap";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
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
          {/* {!isFormSubmitted ? ( */}
          <form className="contact-form">
            <label></label>
            <input type="text" name="name" required />
            <input type="email" name="email" required />
            <button
              type="submit"
              className="button-text"
              onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </form>
          {/* ) : (
            <div>
              <h3 className="success-message ">
                Thank you for getting in touch!
              </h3>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Wrap(Contact, "contact");
