import "./contact.style.scss";

import { Wrap } from "../wrap";
import { MdEmail } from "react-icons/md";

const Contact = () => {
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

          <form
            target="_blank"
            action="https://formsubmit.co/lyndonrey724@gmail.com"
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
            <button type="submit" className="button-text">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Wrap(Contact, "contact");
