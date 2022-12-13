import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from 'react-parallax-tilt';
import {
     AiFillGithub ,
     AiOutlineTwitter, 
     AiOutlineLinkedin ,
     AiFillInstagram,
} from "react-icons/ai"



function Home2() {
    return (
        <Container fluid  className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME  <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming and I have at least learnt 
                            something, I think... 🤷‍♂️
                            <br />
                            <br />I am fluent in classick like
                            <i>
                                <b className="purple"> React, Javascript and Css</b>
                            </i>
                            <br />
                            <br />
                            My field of Interest's are building new @nbsp;
                            <i>
                                <b className="purple">Web Technogies and Products </b> and 
                                also in areas related to{" "}
                                <b className="purple">
                                    Deep Learning and Natural Language Processing.
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products
                             with <b className="purple">Node.js</b> and
                           <i>
                             <b className="purple">
                                {" "}
                                Modern Javascript Library and Frameworks
                             </b>
                           </i>
                           @nbsp; like
                          <i>
                            <b className="purple"> React.js and Next.js</b>
                          </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                     <Col md={12} className="home-about-social">
                        <h1>FİND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                   href="https://github.com/albinaabykanova"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="icon-colour home-social-icons"
                                >
                                    <AiFillGithub  />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                   href="https://twitter.com/home?lang=tr"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="icon-colour home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                   href="https://www.linkedin.com/in/albina-abykanova-a40a32225/"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="icon-colour home-social-icons"
                                >
                                     <AiOutlineLinkedin />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                   href="https://www.instagram.com/aika.coding/"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                     </Col>
                 </Row>                           
            </Container>
        </Container>
    )
}

export default Home2;