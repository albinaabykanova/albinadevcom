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
                      demoLink="https://albina-portfolio-web-site.netlify.app/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={coder}
                      isBlog={false}
                      title="Chatify"
                      description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                      ghLink="https://github.com/albinaabykanova"
                      demoLink="https://albina-getir-clone.netlify.app/"
                    />
                </Col>

                <Col md={4} className="project-card">
                  
                    <ProjectCard
                      imgPath="https://raw.githubusercontent.com/albinaabykanova/gym-website/master/public/screenshot.png"
                      isBlog={false}
                      title="Gym Website"
                      description="Albina Gym's website is a clean and user-friendly platform for fitness enthusiasts. The layout, color scheme, and font choices are well-coordinated and provide a pleasant browsing experience. The menu options on the top of the page are straightforward, but some of the images in the 'Gallery' section at the bottom of the page do not load correctly"
                      ghLink="https://github.com/albinaabykanova/gym-website"
                      demoLink="https://albina-gym-website.netlify.app/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={coder}
                      isBlog={false}
                      title="Chatify"
                      description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                      ghLink="https://github.com/albinaabykanova"
                      demoLink="https://albina-spotify-clone.netlify.app/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={coder}
                      isBlog={false}
                      title="Chatify"
                      description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                      ghLink="https://github.com/albinaabykanova"
                      demoLink="https://albina-saas-landing-page.netlify.app/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={coder}
                      isBlog={false}
                      title="Chatify"
                      description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                      ghLink="https://github.com/albinaabykanova"
                      demoLink="https://albina-twitter-clone.netlify.app/"
                    />
                </Col>
            </Row>
         </Container>
      </Container>
    );
}

export default Projects;