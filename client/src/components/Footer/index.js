import React from "react";
import "./styles.css";

function Footer() {
  return (
    <footer className="uk-text-center uk-text-middle footer">
      <span> © Adam Birgenheier</span> <br />
      <a
        uk-icon="icon: github"
        href="https://github.com/adambear1"
        className="contact-icon contact-link-icon"
        target="_blank"
      ></a>
      <a
        uk-icon="icon: mail"
        className="contact-icon contact-link-icon"
        href="mailto:adamcarlbirgenheier@gmail.com"
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
