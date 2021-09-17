import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Display from './Display';

function Main() {
  return (
    <Container>
      <Row className="vh-100 justify-content-center align-items-center">
        <Col xs={7} className="py-5">
          <Display />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
