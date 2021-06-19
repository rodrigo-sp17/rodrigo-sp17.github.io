import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollButton from "./small/ScrollButton";
import Slide from 'react-reveal/Slide';
import IconButton from "./small/IconButton";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const sectionStyles = {
  height: '100vh',
}

export default function Me() {
  return (
    <section id="me" style={sectionStyles} >
      <Container fluid className="d-flex flex-row justify-content-end">
          <IconButton
            variant="dark"
            href="https://github.com/rodrigo-sp17"
            icon={faGithub}
          />
          <IconButton
            variant="dark"
            href="https://www.instagram.com/rod_silvap/"
            icon={faInstagram}
          />
          <IconButton
            variant="dark"
            href="https://www.linkedin.com/in/rodrigo-silva-pinto/"
            icon={faLinkedin}
          />
      </Container>
      <Container className="d-flex flex-column justify-content-center h-75 ">
      <Slide top>
        <Row className="justify-content-center">
          <Col>
            <h1 className="display-4">Hi, I'm <span className="fw-bold">Rodrigo.</span></h1>
            <h1 className="text-primary"><strong>Full-stack developer,</strong></h1>
            <h2>Self learner,</h2>
            <h3>And a bit obssessed about building stuff...</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ScrollButton to="about" duration={500} smooth={true}>
              <strong>Check it out!</strong>
            </ScrollButton>
          </Col>
        </Row>
      </Slide>    
      </Container>
    </section>
  );
}