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
                        Let me introduce myself, my name is Albina and I am a junior React JS developer. Over the past two years, I have been dedicated to developing my skills and expertise in web development. I am particularly proficient in React, Redux, Bootstrap, JavaScript, Next.js, CSS, Tailwind, and HTML.
                         
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={"https://cdn3d.iconscout.com/3d/premium/thumb/woman-with-hijab-6530590-5823035.png?f=webp"} className="img-fluid" alt="avatar" width={'60%'}/>
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