import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import audd from "./AUDD1.png";

function MainNav() {
  return (
    <div>
      <Navbar style={{ backgroundColor: "black" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={audd}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            AUDD
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNav;
