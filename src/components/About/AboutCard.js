import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi everyone, I am <span className="purple">Albina Abykanova </span>
                        from <span className="purple"> Kyrgyzstan, Bishkek.</span>
                        <br /> I am junior web developer
                        <br />
                        <br /> 
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Cooking, Bakery
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Learn something new
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155, 126, 172" }}>
                        "If you want to be successful, work hard at it!" {" "}
                    </p>
                    <footer className="blockquote-footer">Al'bina</footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard;