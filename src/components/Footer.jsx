import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#663e44" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/DineshGM98"
          aria-label="My GitHub"
        >
          Dinesh Madhusanka
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
           You can downlord my source file. Feel free and make your own version. enjoy every time.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
