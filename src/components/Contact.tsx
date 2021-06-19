import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyButton from './small/MyButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Pulse from 'react-reveal/Pulse';

const element = <FontAwesomeIcon icon={faPaperPlane} />

const sectionStyles = {
  height: "60vh",
}

export default function Contact() {
  return (
    <section style={sectionStyles}>
      <Container className="d-flex flex-column justify-content-center h-100">
        <Pulse delay={500} duration={3000}>
          <Row className="justify-content-center">
            <Col>
              <h1 className="text-center">
                Why don't we build<br /> something <u><strong>awesome</strong></u> together?
            </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
              <MyButton variant="blue" to="mailto:rodrigosilvap93@gmail.com">
                {element}{" Email me!"}
              </MyButton>
            </Col>
          </Row>
        </Pulse>
      </Container>
    </section>
  );
}