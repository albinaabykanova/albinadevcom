import React from "react";
import { Col,Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiGoogle,
    SiYoutube,
    SiFigma,
    SiStackoverflow,
} from "react-icons/si"


function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
               <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <SiGoogle />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <SiYoutube />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <SiFigma  />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
               <SiStackoverflow />
            </Col>
        </Row>
    );
}

export default Toolstack;