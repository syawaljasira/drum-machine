import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Display from './Display';

function Main(props) {
  const [show, setShow] = useState('Heater-1');

  const handleSoundPlay = (key, name) => {
    setShow(name);
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <Container id="drum-machine">
      <Row className="vh-100 justify-content-center align-items-center">
        <Col xs={8}>
          <Display
            show={show}
            handleSoundPlay={handleSoundPlay}
            sounds={props.sounds}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
