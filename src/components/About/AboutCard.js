import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    {/* <p style={{ textAlign: "justify" }}>
                        Hi everyone, I am <span className="purple">Albina Abykanova </span>
                        from <span className="purple"> Turkey, Istanbul</span>
                        <br /> I am junior web developer
                        <br />
                        <br /> 
                        Apart from coding, some other activities that I love to do!
                    </p> */}
                    <p>
                    As a junior React JS developer, I have been honing my skills for the past two years. My expertise includes React, Redux, Bootstrap, JavaScript, Next.js, CSS, Tailwind, and HTML. I am passionate about developing robust, scalable, and high-performance web applications. Throughout my career, I have worked on several projects, ranging from small-scale prototypes to complex web applications.

My proficiency in React and Redux has allowed me to develop efficient and user-friendly interfaces. I am skilled in leveraging frameworks and libraries to build responsive web designs. Additionally, my expertise in CSS and HTML has enabled me to create visually appealing and functional interfaces.

I am a quick learner and enjoy working in a fast-paced environment. I believe in continuous learning and always strive to improve my skills. I am excited to join a team of talented developers and contribute to innovative web applications.
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> React
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Next.js
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Tailwind
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> HTML
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Redux
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Bootstrap
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> JavaScript
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155, 126, 172" }}>
                        "If you want to be successful, work hard at it!" {" "}
                    </p>
                    <footer className="blockquote-footer">Albina</footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard;