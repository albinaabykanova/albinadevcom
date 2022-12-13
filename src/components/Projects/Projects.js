import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import coder from "../../Assets/Projects/coder.jpg";


function Projects() {
    return(
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
                <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={coder}
                      isBlog={false}
                      title="Chatify"
                      description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                      ghLink="https://github.com/albinaabykanova"
                      demoLink="https://blogs.soumya-jit.tech/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={coder}
                      isBlog={false}
                      title="Chatify"
                      description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                      ghLink="https://github.com/albinaabykanova"
                      demoLink="https://blogs.soumya-jit.tech/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={coder}
                      isBlog={false}
                      title="Chatify"
                      description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                      ghLink="https://github.com/albinaabykanova"
                      demoLink="https://blogs.soumya-jit.tech/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={coder}
                      isBlog={false}
                      title="Chatify"
                      description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                      ghLink="https://github.com/albinaabykanova"
                      demoLink="https://blogs.soumya-jit.tech/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={coder}
                      isBlog={false}
                      title="Chatify"
                      description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                      ghLink="https://github.com/albinaabykanova"
                      demoLink="https://blogs.soumya-jit.tech/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={coder}
                      isBlog={false}
                      title="Chatify"
                      description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                      ghLink="https://github.com/albinaabykanova"
                      demoLink="https://blogs.soumya-jit.tech/"
                    />
                </Col>
            </Row>
         </Container>
      </Container>
    );
}

export default Projects;