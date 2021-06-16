import React from 'react';
import { Container, Jumbotron } from "react-bootstrap";

const sectionStyles = {
  paddingTop: 100,
  height: '100vh',
  backgroundColor: "#008ECC",
}

export default function About() {
  return (
    <Jumbotron style={sectionStyles}>
      <Container>
      <h1>About Me</h1>
        <p>
          I'm a 28 year old self-taught programmer that used to operate big ships, but realized that I'm more interested in building software for
          the ship than piloting her.
        </p>
        <p>
          Since then, I've been dedicating my full time (and internet connection) to build software and learning the fundamentals, as the pain of facing
          your own bad code further down the road is a great teacher of good practices!
        </p>
      </Container>
    </Jumbotron>
  )
}