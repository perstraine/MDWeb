import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "123ead0c-def4-4db0-bd06-8a54c728990d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
  return (
    <div>
      <div id="contact_form_container">
        <div id="contact_form_title">Contact Us</div>
        <div id="contact_form_desc">
          Get in touch today and let me take the stress out of your bookkeeping
          so you can focus on your business.
        </div>
        <form id="contact_form" onSubmit={onSubmit}>
          <label>First Name:</label>
          <input type="text" name="first name" required />
          <label>Last Name:</label>
          <input type="text" name="last name" required />
          <label>Email:</label>

          <input type="email" name="email" required />
          <label>How can I help:</label>

          <textarea
            style={{ resize: "vertical" }}
            name="message"
            required
          ></textarea>
          <button id="submit_button" type="submit">Submit</button>
          <p>{result}</p>
        </form>
      </div>
    </div>
  );
}
