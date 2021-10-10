import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DrumPad } from './DrumPad';

function Display(props) {
  return (
    <Row className="bg-drum shadow-lg rounded-3">
      <Col xs={12} sm={11} lg={10} className="pt-4 mx-auto">
        <Row className="justify-content-evenly align-items-center">
          <DrumPad
            handleSoundPlay={props.handleSoundPlay}
            handleSwapSounds={props.handleSwapSounds}
            sounds={props.sounds}
            show={props.show}
            change={props.change}
          />
        </Row>
      </Col>
    </Row>
  );
}

export default Display;
