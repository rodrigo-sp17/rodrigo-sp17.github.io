import React from 'react';
import Button from 'react-bootstrap/esm/Button';

const buttonStyles = {
  borderStyle: 'solid',
  borderColor: '#000000',
  backgroundColor: "#ffffff",
  fontFamily: 'Courier New',
  '&:hover': {
    color: 'blue'
  }
}


export default function MyButton({ children, to, variant, ...rest }: any) {


  switch (variant) {
    case 'dark':
      return (
        <Button {...rest}
          href={to}
          target="_blank"
          style={buttonStyles}
          variant="dark"
          className="mt-3 fs-5 fw-bold text-light bg-dark">
          {children}
        </Button>
      );
    case 'blue':
      return (
        <Button {...rest}
          href={to}
          target="_blank"
          variant="primary"
          className="mt-3 fs-5 fw-bold">
          {children}
        </Button>
      );
    default:
      return (
        <Button {...rest}
          href={to}
          target="_blank"
          style={buttonStyles}
          className="mt-3 fs-5 fw-bold text-dark">
          {children}
        </Button>
      );
  }
}