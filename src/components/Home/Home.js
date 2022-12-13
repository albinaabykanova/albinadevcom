import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Navbar from "../Navbar";
import Type from "./Type";
import Home2 from "./Home2";
import Particle from "../Particle";
import Footer from "../Footer";

function Home() {
    return (
      <section>
        <Container fluid className="home-section"  id="home">
            <Particle />
            <Container className="home-content">
                <Row>
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Selam arkadaşlar!{" "}
                            <span className="wave" role="img" aria-labelledby="wave">
                              👋🏻 
                            </span>
                        </h1>

                        <h1 className="heading-name">
                            İ'M 
                            <strong className="main-name"> ALBİNA ABYKANOVA</strong>
                        </h1>

                        <div style={{  padding: 50, textAling: "left"}}>
                             <Type />
                        </div>
                    </Col>

                    <Col md={5} style={{ paddingBottom: 20 }}>
                        <img
                           src={homeLogo}
                           alt="home pic"
                           className="img-fluid" 
                           style={{ maxHeight: "450px" }}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
        <Home2 />
      </section>
    )
}

export default Home;