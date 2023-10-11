import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankur Dattatray Gaikwad </span>
            from <span className="purple"> Solapur, India.</span>
            <br /> I am a final year student at Walchand College of Engineering, Sangli
            <br />
            {/* Additionally, I am currently employed as a software developer at
            Juspay. */}
            {/* <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Chess
            </li>
          </ul>

          <p style={{ color: "rgb(211, 174, 42)" }}>
            "Change is the only constant!"{" "}
          </p>
          <footer className="blockquote-footer">Ankur DG</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
