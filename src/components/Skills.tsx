import React from 'react';
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

const sectionStyles = {
  paddingTop: 100,
  height: '100vh'
}

const skillStyles = {
  margin: "auto",
}

export default function Skills() {
  return (
    <Jumbotron style={sectionStyles}>
      <Container className="d-flex flex-column"   >
        <h1>Skills</h1>
        <Row className="d-flex pt-3">
          <Col lg={true}><h6>- Java</h6></Col>
          <Col lg={true}><h6>- React</h6></Col>
          <Col lg={true}><h6>- Flutter</h6></Col>
        </Row>
        <Row className="pt-3">
          <Col lg={true}><h6>- Spring Boot</h6></Col>
          <Col lg={true}><h6>- Typescript</h6></Col>
          <Col lg={true}><h6>- SQL and NoSQL</h6></Col>
        </Row>
        <Row className="pt-3">
          <Col lg={true}><h6>- REST</h6></Col>
          <Col lg={true}><h6>- Automated Testing</h6></Col>
          <Col lg={true}><h6>- CI/CD</h6></Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}