import React, { useState } from "react";
import { Container, Navbar, Nav, Button, Collapse} from "react-bootstrap";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFundProjectionScreen,
    AiOutlineContainer,
    AiFillStar   
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
}

window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
       expanded={expand}
       fixed="top"
       expand="md"
       className={navColour ? "sticky" : "navbar"}
    >
      <Container >
        <Navbar.Brand href="/" className="d-flex">
            <img src={"https://cdn3d.iconscout.com/3d/premium/thumb/woman-with-hijab-6530590-5823035.png?f=webp"} className="img-fluid-logo" alt="brand" 
              width="60"
              height="60"
            />
        </Navbar.Brand> 
        <Navbar.Toggle
           aria-controls="responsive-navbar-nav" 
           onClick={() => {
             updateExpanded(expand ? false : "expanded");
           }}
         >
            <span></span>
            <span></span>
            <span></span>
         </Navbar.Toggle>
         <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" ms-auto"  defaultActiveKey="#home">
            <Nav.Item>
              <Link 
                 to="/" 
                 onClick={() => updateExpanded(false)}
                 >
                  <AiOutlineHome style={{ marginBottom: "2px" }}  /> Home
              </Link>
            </Nav.Item>
 
            <Nav.Item>
              <Link
                 to="/about"
                 onClick={() => updateExpanded(false)}
               >
               <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Link>
             </Nav.Item>

             <Nav.Item>
               <Link
                 to="/project"
                 onClick={() => updateExpanded(false)}
               >
                 <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
               </Link>
             </Nav.Item>     
         
            <Nav.Item>
              <Link
                to="/resume"
                 onClick={() => updateExpanded(false)}
               >
                <AiOutlineContainer style={{ marginBottom: "2px" }}  /> Resume
               </Link>
            </Nav.Item> 

           
         
          <Nav.Item className="fork-btn">
            <Button
               href="https://github.com/albinaabykanova"
               className="fork-btn-inner"
             >
               <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
               <AiFillStar style={{ fontSize: "1.2em" }} />
            </Button>   
          </Nav.Item>
        </Nav>
       </Navbar.Collapse>
      </Container>   
    </Navbar>
    )
}
export default NavBar;
