import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Display from './Display';

function Main(props) {
  const [show, setShow] = useState('Sounds 1');
  const [swapSounds, setSwapSounds] = useState(props.sounds1);
  const [change, setChange] = useState(false);

  const handleSoundPlay = (key, name) => {
    const display = document.getElementById('display');
    display.innerText = name;
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  const handleSwapSounds = () => {
    if (swapSounds === props.sounds1) {
      setSwapSounds(props.sounds2);
      setChange(!change);
      setShow('Sounds 2');
    } else if (swapSounds === props.sounds2) {
      setSwapSounds(props.sounds1);
      setChange(!change);
      setShow('Sounds 1');
    }
  };

  return (
    <Container id="drum-machine">
      <Row className="vh-100 justify-content-center align-items-center">
        <Col xs={8} sm={7} md={6} lg={5}>
          <Display
            show={show}
            handleSoundPlay={handleSoundPlay}
            sounds={swapSounds}
            handleSwapSounds={handleSwapSounds}
            change={change}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
