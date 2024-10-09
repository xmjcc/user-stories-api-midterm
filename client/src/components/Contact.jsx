/**
 * Author: Wenping Wang
 * File Name: Contact.jsx 
 * Date: 2024-09-30
 *  Student number: 301250155
 */

import "../contact.css";

/**
 * ContactPage Component
 * This component renders the contact information and 
 * a form for users to send a message.
 */
export default function ContactPage() {

  /**
   * Handle form submission
   * @param {Event} e - The event object
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    alert("Your message has been submitted!"); // Display a submission message
    window.location.href = "/"; // Redirect to the home page
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <header>
        <h1>Contact Us</h1>
      </header>

      {/* Main Content Section */}
      <main>
        {/* Contact Information Section */}
        <section className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Name:</strong> Benjamin Wang
            <br />
            <strong>Email:</strong> benjaminwang2088@gmail.com
            <br />
            <strong>Phone:</strong> 123-456-7890
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}> {/* Bind handleSubmit to the form submission */}
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="input_field"
            />
            <br />

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="input_field"
            />
            <br />

            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              className="input_field"
            />
            <br />

            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input_field"
            />
            <br />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="message-textarea"
              required
            ></textarea>
            <br />

            <button type="submit" className="send-button">Send</button>
          </form>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

