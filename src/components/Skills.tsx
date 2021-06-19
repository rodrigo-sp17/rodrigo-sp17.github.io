import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';

const element = <FontAwesomeIcon icon={faAngleRight} />

const sectionStyles = {
  minHeight: '40vh'
}

export default function Skills() {
  return (
    <section style={sectionStyles}>
      <Container className="pt-5 pb-5 vh-75">
      <Fade bottom>
        <Row>
          <h1 className="display-4 fw-bold">Skills</h1>
        </Row>
        <Row className="justify-content-center pt-5">
          <Col xs={12}>
            <p className="fs-5">
              After starting from CS50, I've completed a lot of other courses and projects, both 
              theoretical and practical. My main stack is Java for the back-end and React for the front, 
              but I definetely do not stop at it: so far I've touched functional programming, Elixir, Scala, 
              among others.
            </p>
          </Col>
        </Row>
        <Row className="mt-4 pt-4">
          <Col xs={12} lg={4}><h5>{element} Java</h5></Col>
          <Col xs={12} lg={4}><h5>{element} React</h5></Col>
          <Col xs={12} lg={4}><h5>{element} Flutter</h5></Col>
          <Col xs={12} lg={4}><h5>{element} Spring Boot</h5></Col>
          <Col xs={12} lg={4}><h5>{element} Typescript</h5></Col>
          <Col xs={12} lg={4}><h5>{element} SQL and NoSQL</h5></Col>
          <Col xs={12} lg={4}><h5>{element} REST</h5></Col>
          <Col xs={12} lg={4}><h5>{element} Automated Testing</h5></Col>
          <Col xs={12} lg={4}><h5>{element} CI/CD</h5></Col>
        </Row>
        </Fade>
      </Container>
    </section>
  )
}