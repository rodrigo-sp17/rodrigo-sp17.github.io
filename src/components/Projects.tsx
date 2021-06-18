import React from 'react';
import { Col, Container, Jumbotron, Row, Image, Button } from "react-bootstrap";
import seaMatesWeb from "../images/SeaMatesWeb.jpg";
import seaMates from "../images/WelcomePreview.png";
import seaMates2 from "../images/CalendarPreview.png";
import seaMates3 from "../images/ShiftPreview.png";

const sectionStyles = {
  paddingTop: 100,
  height: '100vh'
}


export default function Projects() {
  return (
    <section className="bg-dark">
      <Container className="pt-5 pb-5">
        <h1 className="display-3 text-white">What I'm working on</h1>
        <Row className="pt-5 pb-3">
          <Col lg={6} xs={12} className="pb-3">
            <Image fluid src={seaMatesWeb} />
          </Col>
          <Col lg={6}>
            <h5 className="fs-3 pb-3 text-white">SeaMates Web</h5>
            <p className="fs-5 pb-3 text-white">
              A responsive web app built with React, Typescript and 
              Material UI for sharing work shifts between friends.
            </p>
            <p className="fs-5 pb-3 text-white">Backed by Marine Scheduler API.</p>
            <Button className="mb-1">See Live</Button><br />
            <Button>View on GitHub</Button>
          </Col>
        </Row>
        <Row className="pt-5 justify-content-center">
          <Col xs={4} lg={2} className="pb-3">
            <Image fluid  src={seaMates} />
          </Col>
          <Col xs={4} lg={2} className="pb-3">
            <Image fluid  src={seaMates2} />
          </Col>
          <Col xs={4} lg={2} className="pb-3">
            <Image fluid  src={seaMates3} />
          </Col>
          <Col lg={6}>
            <h5 className="fs-3 pb-3 text-white">SeaMates Mobile</h5>
            <p className="fs-5 pb-3 text-white">A mobile app version of SeaMates with async offline features.</p>
            <p className="fs-5 pb-3 text-white"> Built with Flutter.</p>
            <Button className="mb-1">See Live</Button><br />
            <Button>View on GitHub</Button>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col lg={6} xs={12} className="pb-3">
            <Image fluid src={seaMatesWeb} /></Col>
          <Col>
            <h5 className="fs-3 pb-3 text-white">Marine Scheduler API</h5>
            <p className="fs-5 pb-3 text-white">A REST API providing the backend for the SeaMates apps.</p>
            <p className="fs-5 pb-3 text-white">Built with Spring Boot.</p>
            <Button className="mb-1">See Swagger</Button><br />
            <Button>View on GitHub</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}