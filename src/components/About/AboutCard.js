import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yassine Benlahbib </span>
            from <span className="purple"> Berrechid, Morocco.</span>
            <br />
            I am currently a final year engineering student at the National School of Applied Sciences of Berrechid (ENSAB).
            <br />
            I have Obtained my DUT in Computer Science from the Higher School of Technologie Meknès (ESTM).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yassine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
