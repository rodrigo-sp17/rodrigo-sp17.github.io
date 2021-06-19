import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const elementBlack = <FontAwesomeIcon icon={faGithub} />
const elementWhite = <FontAwesomeIcon style={{ color: 'white' }} icon={faGithub} />

const buttonStyles = {
  fontFamily: 'Courier New',
  borderStyle: 'none',
  backgroundColor: "#ffffff",
  color: "black",
}

const hoverStyles = {
  fontFamily: 'Courier New',
  borderStyle: 'none',
  backgroundColor: "#000000",
  borderColor: 'black',
  color: "white",
  borderWidth: '5px',
}


export default function MyGithubButton(props: any) {
  const { children, href } = props;
  const [isHover, setHover] = useState(false);

  const hoverEnter = () => {
    setHover(true);
  }

  const hoverExit = () => {
    setHover(false);
  }

  return (
    <Button
      href={href}
      target="_blank"
      onMouseEnter={hoverEnter}
      onMouseLeave={hoverExit}
      style={isHover ? hoverStyles : buttonStyles}
      className="mt-3 fs-5"
    >
      {isHover ? elementWhite : elementBlack}
      {" "}
      {children}
    </Button>
  )
}