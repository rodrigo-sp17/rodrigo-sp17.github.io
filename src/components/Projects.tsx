import React from 'react';
import { Col, Container, Jumbotron, Row, Image, Button } from "react-bootstrap";
import seaMatesWeb from "../images/SeaMatesWeb.jpg";

const sectionStyles = {
  paddingTop: 100,
  height: '100vh'
}


export default function Projects() {
  return (
    <Jumbotron style={sectionStyles}>
      <Container>
      <h1>What I'm working on</h1>
        <Row className="pt-5">
          <Col lg={true}><Image className="w-75" src={seaMatesWeb} /></Col>
          <Col>
            <h5>SeaMates Web</h5>
            <p>A responsive web app built with Material UI for sharing work shifts between friends.</p>
            <p>Backed by a REST API using Spring Boot.</p>
            <Button>See Live</Button><br />
            <Button>View on GitHub</Button>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col lg={true}><Image className="w-75" src={seaMatesWeb} /></Col>
          <Col>
            <h5>SeaMates Mobile</h5>
            <p>A mobile app version of SeaMates with async offline features.</p>
            <p>Built with Flutter.</p>
            <Button>See Live</Button><br />
            <Button>View on GitHub</Button>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col lg={true}><Image className="w-75" src={seaMatesWeb} /></Col>
          <Col>
            <h5>Marine Scheduler API</h5>
            <p>A REST API providing the backend for the SeaMates apps.</p>
            <p>Built with Spring Boot.</p>
            <Button>See Swagger</Button><br />
            <Button>View on GitHub</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}