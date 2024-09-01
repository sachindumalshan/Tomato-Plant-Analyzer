import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

const LoadingSpinner = () => {
  const spinnerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const iconStyle = {
    fontSize: '3rem',
    color: 'green',
    border: '5px solid green',
    padding: 25,
    borderRadius: 100,
  };

  return (
    <Container style={spinnerStyle}>    
      <FontAwesomeIcon icon={faSeedling} spin style={iconStyle} />
      <br></br>
      <h2 className='mx-3'>Loading...</h2>
    </Container>
  );
};

export default LoadingSpinner;
