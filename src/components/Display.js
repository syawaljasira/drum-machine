import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { DrumPad, Show } from './DrumPad';

function Display(props) {
  return (
    <div>
      <Row className="bg-secondary">
        <Col xs={12} className="pt-4">
          <Row className="my-2 justify-content-evenly align-items-center">
            <DrumPad sounds={props.sounds} />
          </Row>
        </Col>
        <Col xs={12} className="py-4">
          <Row className="justify-item-around">
            <Col xs={{ span: 4, offset: 4 }} className="text-center">
              <Show />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
}

export default Display;
