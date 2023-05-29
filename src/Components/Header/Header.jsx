import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./header.css";

import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <div>
      <Navbar className="header">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <NavDropdown title="Home" id="navbarScrollingDropdown" className="main_menu">
                <div className="menu-Item">
                  <Row>
                    <Col md={3}>
                      <NavDropdown.Item href="#action3" className="menu-title">
                        ELEMENT GROUP 01
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action3">According & Toggles</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Box icon</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Box Image</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Box Large Image</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Buttons</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Client Logo</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Countdown</NavDropdown.Item>
                    </Col>
                    <Col md={3}>
                      <NavDropdown.Item href="#action3" className="menu-title">
                        ELEMENT GROUP 02
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Counters</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Divides</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Box Image</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Flexible Image Slider</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Google Map </NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Gradation</NavDropdown.Item>
                      <NavDropdown.Item href="#action3"> Lists</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Message box</NavDropdown.Item>
                    </Col>
                    <Col md={3}>
                      <NavDropdown.Item href="#action3" className="menu-title">
                        ELEMENT GROUP 03
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Popup Video</NavDropdown.Item>

                      <NavDropdown.Item href="#action3">pricing Box</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Prigress Bar </NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Prigress Circle</NavDropdown.Item>
                      <NavDropdown.Item href="#action3"> Rows & Columns</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Social Networks</NavDropdown.Item>
                      <NavDropdown.Item href="#action3"> Tabs</NavDropdown.Item>
                      <NavDropdown.Item href="#action3"> Team Member</NavDropdown.Item>
                    </Col>
                    <Col md={3}>
                      <NavDropdown.Item href="#action3" className="menu-title">
                        ELEMENT GROUP 04
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Testimonials</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Timeline</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Carousel Silders</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">typed Text</NavDropdown.Item>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              <NavDropdown title="Company" id="navbarScrollingDropdown" className="main_menu">
                <NavDropdown.Item href="#action3">About us</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>

                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="IT Solutions" id="navbarScrollingDropdown" className="main_menu">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title=" Elements" id="navbarScrollingDropdown" className="main_menu">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Case Studies" id="navbarScrollingDropdown" className="main_menu">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="navbarScrollingDropdown" className="main_menu">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <div className="inputbox">
                <input type="text" className="inputBtn" placeholder="Search" /> <BsSearch className="serchicon" />
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
