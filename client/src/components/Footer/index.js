import React from "react";
import "./styles.css";

function Footer() {
  return (
    <footer className="uk-text-center uk-text-middle footer">
      <a href="http://quality-creations.com" style={{ textDecoration: "none" }}>
        <span> © Quality Creations</span>
      </a>{" "}
      <br />
      <a
        title="github"
        uk-icon="icon: github"
        href="https://github.com/adambear1"
        className="contact-icon contact-link-icon"
        target="_blank"
      ></a>
      <a
        title="mail"
        uk-icon="icon: mail"
        className="contact-icon contact-link-icon"
        href="mailto:adam@quality-creations.com"
      ></a>
      <a
        uk-icon="icon: linkedin"
        href="https://www.linkedin.com/in/abirgenheier/"
        target="_blank"
        className="contact-icon contact-link-icon"
      ></a>
    </footer>
  );
}

export default Footer;
