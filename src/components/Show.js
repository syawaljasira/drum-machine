import React from 'react';
import { Col } from 'react-bootstrap';

function Show(props) {
  return (
    <Col className="mt-4 " xs={{ span: 4 }}>
      <h3 id="display" className="bg-back text-light p-2 rounded text-center">
        {props.show}
      </h3>
    </Col>
  );
}

export default Show;
