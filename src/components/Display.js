import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DrumPad } from './DrumPad';

function Display(props) {
  return (
    <Row className="bg-lightBlue rounded">
      <Col xs={12} className="pt-4">
        <Row className="justify-content-evenly align-items-center">
          <DrumPad
            handleSoundPlay={props.handleSoundPlay}
            sounds={props.sounds}
            show={props.show}
          />
        </Row>
      </Col>
    </Row>
  );
}

export default Display;
