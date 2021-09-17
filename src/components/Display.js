import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

function Display(props) {
  return (
    <div>
      <Row className="bg-secondary">
        <Col xs={12} className="pt-4">
          <Row className="my-2 justify-content-evenly align-items-center">
            <Col xs={3} className="mx-1 d-grid">
              <Button
                variant="success"
                size="lg"
                className="p-5"
                onClick={props.handleSound}
                type="button"
              >
                <h2>Q</h2>
              </Button>
            </Col>
            <Col xs={3} className="mx-1 d-grid">
              <Button
                variant="success"
                size="lg"
                className="p-5"
                onClick={props.handleSound}
                type="button"
              >
                <h2>W</h2>
              </Button>
            </Col>
            <Col xs={3} className="mx-1 d-grid">
              <Button
                variant="success"
                size="lg"
                className="p-5"
                onClick={props.handleSound}
                type="button"
              >
                <h2>E</h2>
              </Button>
            </Col>
          </Row>
          <Row className="my-4 justify-content-evenly">
            <Col xs={3} className="mx-1 d-grid">
              <Button
                variant="success"
                size="lg"
                className="p-5"
                onClick={props.handleSound}
                type="button"
              >
                <h2>A</h2>
              </Button>
            </Col>
            <Col xs={3} className="mx-1 d-grid">
              <Button
                variant="success"
                size="lg"
                className="p-5"
                onClick={props.handleSound}
                type="button"
              >
                <h2>S</h2>
              </Button>
            </Col>
            <Col xs={3} className="mx-1 d-grid">
              <Button
                variant="success"
                size="lg"
                className="p-5"
                onClick={props.handleSound}
                type="button"
              >
                <h2>D</h2>
              </Button>
            </Col>
          </Row>
          <Row className="my-4 justify-content-evenly">
            <Col xs={3} className="mx-1 d-grid">
              <Button
                variant="success"
                size="lg"
                className="p-5"
                onClick={props.handleSound}
                type="button"
              >
                <h2>A</h2>
              </Button>
            </Col>
            <Col xs={3} className="mx-1 d-grid">
              <Button
                variant="success"
                size="lg"
                className="p-5"
                onClick={props.handleSound}
                type="button"
              >
                <h2>S</h2>
              </Button>
            </Col>
            <Col xs={3} className="mx-1 d-grid">
              <Button
                variant="success"
                size="lg"
                className="p-5"
                onClick={props.handleSound}
                type="button"
              >
                <h2>D</h2>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="py-4">
          <Row className="justify-item-around">
            <Col xs={{ span: 3, offset: 1 }} className="text-center">
              power
            </Col>
            <Col xs={{ span: 4 }} className="text-center">
              chord 1
            </Col>
            <Col xs={{ span: 3 }} className="text-center">
              bank
            </Col>
            <Col className="mt-4" xs={{ span: 8, offset: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corrupti, dicta?
            </Col>
          </Row>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
}

export default Display;
