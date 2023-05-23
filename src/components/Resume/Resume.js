import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/albina.cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row
          style={{
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              onClick={() => {
                window.open(pdf);
              }}
              style={{ maxWidth: "250px", height: "50px", fontSize: "20px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
