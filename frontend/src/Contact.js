import React from "react";

function Contact() {
  return (
    <section style={{ padding: "2rem 1rem", maxWidth: 500, margin: "0 auto" }}>
      <h2>Contact Me</h2>
      <form
        action="https://formspree.io/f/mpwreqed"
        method="POST"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <label>
          Your email:
          <input
            type="email"
            name="email"
            style={{
              padding: "0.75rem",
              fontSize: "1rem",
              width: "100%",
              marginTop: "0.5rem",
            }}
            required
          />
        </label>
        <label>
          Your message:
          <textarea
            name="message"
            rows={5}
            style={{
              padding: "0.75rem",
              fontSize: "1rem",
              width: "100%",
              marginTop: "0.5rem",
            }}
            required
          />
        </label>
        <button
          type="submit"
          className="say-hello-btn"
          style={{
            padding: "0.75rem",
            fontSize: "1.1rem",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "2rem",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
