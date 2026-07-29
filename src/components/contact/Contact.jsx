import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [submission, setSubmission] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "79c57c53-f2bc-43f4-b9ec-847894a6c9de");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    setSubmission(true);

  };
  return (
    <div>
      {submission ? (
        <div id="contact_form_container">
          <div id="contact_form_title">Contact Us</div>
          <div id="contact_form_desc">
            Get in touch today and let me take the stress out of your
            bookkeeping so you can focus on your business.
          </div>
          {result == "Success!" ? (
            <div id="contact_form_submission_message">
              Your contact form has been submitted. We will be in touch with you
              shortly.
            </div>
          ) : (
            <div id="contact_form_submission_message">
              <p>
                Something went wrong when sending the contact form. Please try
                again later.
              </p>
              <p style={{ paddingTop: "20px" }}>
                You can also email me directly at:
              </p>
              <p>info@mdbookkeeping.co.nz</p>
            </div>
          )}
        </div>
      ) : (
        <div id="contact_form_container">
          <div id="contact_form_title">Contact Us</div>
          <div id="contact_form_desc">
            Get in touch today and let me take the stress out of your
            bookkeeping so you can focus on your business.
          </div>
          <div id="contact_form_extra">
            You can email me at info@mdbookkeeping.co.nz or fill out the
            contact form below.
          </div>
          <form id="contact_form" onSubmit={onSubmit}>
            <label>First Name:</label>
            <input
              type="text"
              name="first name"
              required
              placeholder="Required"
            />
            <label>Last Name:</label>
            <input
              type="text"
              name="last name"
              required
              placeholder="Required"
            />
            <label>Email:</label>

            <input type="email" name="email" required placeholder="Required" />
            <label>Phone Number:</label>
            <input type="tel" name="phone" required placeholder="Required" />
            <label>How can I help:</label>

            <textarea
              style={{ resize: "none" }}
              name="message"
              required
              placeholder="Required"
            ></textarea>
            <button id="submit_button" type="submit">
              Submit
            </button>
            <p>{result}</p>
          </form>
        </div>
      )}
    </div>
  );
}
