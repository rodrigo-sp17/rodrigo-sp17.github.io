import React from 'react';
import { Col, Container, Jumbotron, Row, Image, Button } from "react-bootstrap";
import seaMatesWeb from "../images/SeaMatesWeb.jpg";
import seaMates from "../images/WelcomePreview.png";
import seaMates2 from "../images/CalendarPreview.png";
import seaMates3 from "../images/ShiftPreview.png";
import MyGithubButton from './small/MyGithubButton';
import MyButton from './small/MyButton';
import Terminal from './small/Terminal';
import MobileStoreButton from 'react-mobile-store-button';
import Fade from 'react-reveal/Fade';


export default function Projects() {
  return (
    <section className="bg-dark">
      <Container className="pt-5 pb-5">
        <Fade bottom delay={300}>
          <Row>
            <h1 className="display-4 text-white fw-bold">What I'm working on</h1>
          </Row>
          <Row className="justify-content-center pt-5">
            <p className="fs-5 text-light">
              In the spirit of depth over breadth, here is the REST + Web App + Mobile ecossytem
              that I've been working on heavily during the last months. The idea is for the front-end
              to build engagement so the backend can start feeling some load.
          </p>
            <p className="fs-5 text-light">
              However, there are many more projects
            on my <a href="https://github.com/rodrigo-sp17" target="_blank">GitHub</a>. Fell
            free to check it out!
          </p>
          </Row>
        </Fade>
        <Fade left delay={300}>
          <Row className="pt-5 pb-3">
            <Col lg={6} xs={12} className="pb-3">
              <Image fluid src={seaMatesWeb} />
            </Col>
            <Col lg={6}>
              <h5 className="fs-3 pb-3 text-white fw-bold">SeaMates Web</h5>
              <p className="fs-5 pb-3 text-white">
                A responsive web app built with React, Typescript and
                Material UI for sharing work shifts between friends.
            </p>
              <p className="fs-5 pb-3 text-white">Backed by Marine Scheduler API.</p>
              <MyGithubButton href="https://github.com/rodrigo-sp17/sea-mates-web">View on GitHub</MyGithubButton>
              <br />
              <MyButton variant="blue" to="https://seamates.herokuapp.com">See Live</MyButton>
            </Col>
          </Row>
        </Fade>
        <Fade left delay={300}>
          <Row className="pt-5 pb-3">
            <Col xs={4} lg={2} className="pb-3">
              <Image fluid src={seaMates} />
            </Col>
            <Col xs={4} lg={2} className="pb-3">
              <Image fluid src={seaMates2} />
            </Col>
            <Col xs={4} lg={2} className="pb-3">
              <Image fluid src={seaMates3} />
            </Col>
            <Col lg={6}>
              <h5 className="fs-3 pb-3 text-white fw-bold">SeaMates Mobile</h5>
              <p className="fs-5 pb-3 text-white">A mobile app version of SeaMates with async offline features.</p>
              <p className="fs-5 pb-3 text-white"> Built with Flutter.</p>
              <MyGithubButton href="https://github.com/rodrigo-sp17/sea-mates">View on GitHub</MyGithubButton>
              <br />
              <MobileStoreButton className="m-0" store="android" url="https://play.google.com/store/apps/details?id=com.rodrigosp.sea_mates" />
            </Col>
          </Row>
        </Fade>
        <Fade left delay={300}>
          <Row className="pt-5">
            <Col lg={6} xs={12} className="pb-3">
              <Terminal />
            </Col>
            <Col>
              <h5 className="fs-3 pb-3 text-white fw-bold">Marine Scheduler API</h5>
              <p className="fs-5 pb-3 text-white">A REST API providing the backend for the SeaMates apps.</p>
              <p className="fs-5 pb-3 text-white">Built with Spring Boot, PostgresSQL and Redis.</p>
              <MyGithubButton href="https://github.com/rodrigo-sp17/marine-scheduler">View on GitHub</MyGithubButton>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  )
}