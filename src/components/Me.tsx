import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const sectionStyles = {
  //paddingLeft: 400,
  height: '100vh',
}

const containerStyles = {
  //paddingTop: 200,
  //marginBottom: 64,
  height: '100vh',
  
}

const titleStyles = {
  //fontFamily: "Arial",  
  //fontSize: "2rem",
  
}

export default function Me() {
  return (
    <section style={sectionStyles} className="pt-xl-5 ">
      <Container className="d-flex flex-column justify-content-center h-100 ">
        <Row>
          <Col >
            <h1 className="display-4">Hi, I'm <span className="fw-bold">Rodrigo.</span></h1>
            <h1>Full-stack developer,</h1>
            <h2>Self learner,</h2>
            <h3>And a bit obssessed about building stuff...</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="mt-5">Check it out!</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}