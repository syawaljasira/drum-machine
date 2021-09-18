import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Display from './Display';

function Main(props) {
  return (
    <Container>
      <Row className="vh-100 justify-content-center align-items-center">
        <Col xs={7} className="py-5">
          <Display sounds={props.sounds} />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
