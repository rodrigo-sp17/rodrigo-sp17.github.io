import { Link } from 'react-scroll';
import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { animateScroll } from 'react-scroll';

const buttonStyles = {
  borderStyle: 'solid',
  borderWidth: '5px',
  borderColor: 'black',
  backgroundColor: "#000000",
  color: "white",
  fontFamily: 'Courier New'
}

const hoverStyles = {
  backgroundColor: "#ffffff",
  borderColor: 'black',
  color: "black",
  borderStyle: 'solid',
  borderWidth: '5px',
  fontFamily: 'Courier New'
}

interface Props {
  children: any,
  to: string,
  duration: number,
  smooth: boolean
}

export default function ScrollButton(props: Props) {
  const { children, to, duration, smooth } = props;
  const [isHover, setHover] = useState(false);

  const hoverEnter = () => {
    setHover(true);
  }

  const hoverExit = () => {
    setHover(false);
  }

  return (
    <Link to={to} duration={duration} smooth={smooth}>
      <Button
        size="lg"
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverExit}
        variant="dark"
        style={isHover ? hoverStyles : buttonStyles}
        className="mt-3">
        {children}
      </Button>
    </Link>
  )
}