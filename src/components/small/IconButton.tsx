import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/esm/Button';

const buttonStyles = {
  borderStyle: 'none',
  color: "#000000",
  borderWidth: '5px',
  paddingLeft: 20,
  paddingRight: 20
}

const iconWStyles = {
  height: "50px",
  color: 'white'
}

const iconBStyles = {
  height: "50px",
  color: 'black'
}

const iconBlueStyles = {
  height: "50px",
  color: "lightBlue"
}

export default function IconButton({ icon, href, variant, ...rest }: any) {
  const [hover, setHover] = useState(false);

  const defaultStyle = variant === 'dark' ? iconBStyles : iconWStyles;
  const hoverStyle = variant === 'dark' ? iconBlueStyles : iconBStyles;

  const realIcon = <FontAwesomeIcon
    className="fa-2x"
    style={hover ? hoverStyle : defaultStyle}
    icon={icon}
  />

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
      style={buttonStyles}
      variant="link"
      size="lg"
    >
      {realIcon}
    </Button>
  );
}