import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const sectionStyles = {
  minHeight: "40vh",
}

export default function Contact() {
  return (
    <section style={sectionStyles}>
      <Container fluid className="pt-5 pb-5">
        <Row>
          <Col className="pt-5 text-center">
            <h1 className="text-center">
              Why don't we build together?
            </h1> 
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="pt-3 text-center">
            <a href="mailto:rodrigosilvap93@gmail.com">
              <strong><h5>rodrigosilvap93@gmail.com</h5></strong>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}