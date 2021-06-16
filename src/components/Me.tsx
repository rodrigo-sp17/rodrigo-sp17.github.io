import React from "react";
import { Container, Row, Col, Image, Jumbotron, Button } from "react-bootstrap";

const sectionStyles = {
  //paddingLeft: 400,
  height: '100vh'
}

const headingStyles = {
  //paddingTop: 200,
  //marginBottom: 64,
}

const titleStyles = {
  //fontFamily: "Arial",  
  //fontSize: "2rem",
  
}

export default function Me() {
  return (
    <Jumbotron style={sectionStyles} className="pt-xl-5 ">
      <Container>
        <Row>
          <h1 className="display-3">Hi, I'm <span className="fw-bold">Rodrigo.</span></h1>
          <h1>Full-stack developer,</h1>
          <h2>Self learner,</h2>
          <h3>And a bit obssessed about building stuff...</h3>
        </Row>
        <Button className="mt-5">What do you mean?</Button>
      </Container>
    </Jumbotron>
  );
}