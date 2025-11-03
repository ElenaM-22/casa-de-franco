import "./../css/index.css";
import "./../css/ContactForm.css";
import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2aa8a7c4-78b9-41ca-ae04-93643c34b79b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <section>
            <label for="name">Name:</label>
            <input id ="name" class = "input" type="text" name="Your Name:" required/>
        </section>
        <section>
            <label for="email">Your email address:</label>
            <input id="email" class = "input" type="email" name="Your Email" required/>
        </section>
        <section>
            <label for="message">What would you like to tell us?</label>
            <textarea id="message" class = "input" name="What would you like to tell us?" required></textarea>
        </section>

        <button type="submit">Submit Feedback</button>

      </form>
      <span>{result}</span>

    </div>
  );
}