import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out, " + name + "!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section style={{ padding: "2rem 1rem", maxWidth: 500, margin: "0 auto" }}>
      <h2>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: "0.75rem", fontSize: "1rem" }}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "0.75rem", fontSize: "1rem" }}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          style={{ padding: "0.75rem", fontSize: "1rem" }}
        />
        <button
          type="submit"
          style={{
            padding: "0.75rem",
            fontSize: "1.1rem",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "2rem",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
