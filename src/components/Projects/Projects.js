import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import coder from "../../Assets/Projects/coder.jpg";
import { data } from "./data";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {data.map((item, index) => {
            return (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                  imgPath={item.imgPath}
                  isBlog={false}
                  title={item.title}
                  description={item.desc}
                  ghLink={item.githubLink}
                  demoLink={item.demoLink}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
