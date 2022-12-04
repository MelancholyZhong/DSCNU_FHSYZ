import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import React from "react";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <h1 style={{color:"#fffdfd", fontFamily: 'Caveat, cursive', alignItems:"center"}}> F H  S Y Z  </h1>
            </Container>
        </Navbar>
    );
};

export default NavBar;
