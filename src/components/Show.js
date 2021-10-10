import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

function Show(props) {
  const Toggle = () => {
    if (props.change) {
      return <BsToggleOn size={28} />;
    } else {
      return <BsToggleOff size={28} />;
    }
  };

  return (
    <>
      <Col
        className="my-3 my-lg-4 px-2 pt-2 bg-back hover-back rounded-pill text-center"
        xs={{ span: 5 }}
        md={{ span: 4 }}
      >
        <h6 id="display">{props.show}</h6>
      </Col>
      <Col
        className="my-3 my-lg-4 py-1 bg-back hover-back rounded-pill text-center"
        xs={{ span: 5 }}
        md={{ span: 4, offset: 1 }}
      >
        <span onClick={props.handleSwapSounds}>
          <Toggle />
        </span>
      </Col>
    </>
  );
}

export default Show;
