import React from 'react';
import { Container, Image, Col, Row } from "react-bootstrap";
import profile from "../images/Perfil.jpg";
import Fade from 'react-reveal/Fade';


export default function About() {
  return (
    <section id="about" className="bg-dark">
      <Container className="pt-5 pb-5">
        <Fade big>
          <Row>
            <h1 className="display-4 text-white fw-bold">About Me</h1>
          </Row>
          <Row className="justify-content-center pt-5">
            <Col xs={12} lg={8}>
              <p className="fs-5 pb-3 text-white">
                I'm a 28 year old self-taught developer that used to operate <a href="https://en.wikipedia.org/wiki/Platform_supply_vessel" target="_blank">big ships</a>,
              but realized that I'm more fascinated by the <a href="https://en.wikipedia.org/wiki/Dynamic_positioning" target="_blank">software controlling the ship</a> than
              actually running her.
            </p>
              <p className="fs-5 pb-3 text-white">
                Since then, I've been dedicating my full time (and internet connection) to learning the fundamentals and building software that would help myself,
                former buddies and the people I love.
            </p>
              <p className="fs-5 pb-3 text-white">
                These projects have also taught me the importance of using well-chosen design patterns and writing good, clean code that is safe from bugs,
                easy to change and highly modular. There is no better teacher of good practices than
                having to do large scale refactoring of your own poorly written code, after all...
            </p>
            </Col>
            <Col xs={10} lg={4} className="pt-4"><Image fluid thumbnail src={profile} /></Col>
          </Row>
        </Fade>
      </Container>
    </section>
  )
}