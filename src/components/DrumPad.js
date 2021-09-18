import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Button, Col } from 'react-bootstrap';

export const DrumPad = ({ sounds }) => {
  return sounds.map((sound, index) => {
    return (
      <Fragment>
        <Box audio={sound.mp3} text={sound.key} idx={index} />
      </Fragment>
    );
  });
};

function Box(props) {
  const [play, setPlay] = useState(false);
  const [show, setShow] = useState('');
  const audio = useRef();

  const handleSound = () => {
    setPlay(!play);
    audio.current.play();

    setShow(props.text);
  };

  useEffect(() => {
    const audio = document.getElementById(props.text);
    audio.addEventListener('keydown', () => setPlay(false));
    return () => {
      audio.removeEventListener('keydown', () => setPlay(false));
    };
  }, []);

  return (
    <Col xs={3} className="mx-1 my-2 d-grid">
      <Button
        variant="success"
        size="lg"
        className="p-5"
        onClick={handleSound}
        type="button"
      >
        <h2>{props.text}</h2>
        <audio
          ref={audio}
          className="clip"
          id={props.text}
          src={props.audio}
        ></audio>
      </Button>
    </Col>
  );
}

document.addEventListener('keydown', (ev) => {
  const id = ev.key.toUpperCase();
  const audio = document.getElementById(id);

  if (audio) {
    const parent = audio.parentNode;
    parent.classList.add('active');
    audio.play();

    setTimeout(() => {
      parent.classList.remove('active');
    }, 100);
  }
});

export const Show = ({ sound }) => {
  return (
    <Col>
      <div>{sound.key + 'is playing.'}</div>
    </Col>
  );
};
