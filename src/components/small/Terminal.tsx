import React from 'react';

const paperStyle = {
  backgroundColor: 'black',
  borderRadius: '8px',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: 'grey',
  height: '300px'
}

const greenCircleStyles = {
  width: "15px",
  height: "15px",
  borderRadius: '15px',
  backgroundColor: 'green',
  marginLeft: "5px"
}

const yellowCircleStyles = {
  width: "15px",
  height: "15px",
  borderRadius: '15px',
  backgroundColor: 'yellow',
  marginLeft: "5px"
}

const redCircleStyles = {
  width: "15px",
  height: "15px",
  borderRadius: '15px',
  backgroundColor: 'red',
  marginLeft: "5px"
}

const headerStyle = {
  backgroundColor: "#ffffffc0",
  borderRadius: '8px',
  padding: "5px"
}

const bodyStyle = {
  padding: '20px'
}

const textStyle = {
  color: 'white',
  fontFamily: 'Courier New'
}

export default function Terminal({children, ...rest}: any) {
  return (
    <div style={paperStyle} className="d-flex flex-column">
      <div id="header" style={headerStyle} className="d-flex flex-row">
        <div style={redCircleStyles}></div>
        <div style={yellowCircleStyles}></div>
        <div style={greenCircleStyles}></div>
      </div>
      <div id="body" style={bodyStyle}>
        <p style={textStyle}>
          <p>Try it out!</p>
          $ curl -X GET https://seamates.herokuapp.com/v3/api-docs
          {children}
        </p>
      </div>
    </div>
  );
}