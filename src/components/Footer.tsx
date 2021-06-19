import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { animateScroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import IconButton from './small/IconButton';

library.add(fab);


const footerStyles = {
  minHeight: '20vh',
}

const iconStyles = {
  height: "50px",
  color: 'white'
}

const buttonStyles = {
  borderStyle: 'none',
  color: "#ffffff",
  borderWidth: '5px',
  paddingLeft: 20,
  paddingRight: 20
}

const upButtonStyles = {
  color: "#ffffff",
  width: 100,
  padding: 0,
  margin: 0
}

const upArrow = <FontAwesomeIcon className="fa-2x" style={iconStyles} icon={faAngleUp} />;

export default function Footer() {

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  }

  return (
    <footer style={footerStyles} className="bg-dark">
      <Container fluid className="pt-2 pb-3">
        <Row className="justify-content-center">
          <Button style={upButtonStyles} variant="link" onClick={scrollToTop}>
            {upArrow}
          </Button>
        </Row>
        <Container className="d-flex flex-row justify-content-center pb-2">
          <IconButton
            variant="light"
            href="https://github.com/rodrigo-sp17"
            icon={faGithub}
          />
          <IconButton
            variant="light"
            href="https://www.instagram.com/rod_silvap/"
            icon={faInstagram}
          />
          <IconButton
            variant="light"
            href="https://www.linkedin.com/in/rodrigo-silva-pinto/"
            icon={faLinkedin}
          />
        </Container>
        <Row className="justify-content-center">
          <h6 className="text-light text-center">
            © 2021 - Developed by Rodrigo Silva Pinto
              </h6>
        </Row>
      </Container>
    </footer>
  );
}