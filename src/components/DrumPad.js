import React, { Fragment, useEffect } from 'react';
import { Button, Col } from 'react-bootstrap';
import Show from './Show';

export const DrumPad = (props) => {
  function Box({ sound, idx, handleSoundPlay }) {
    const handleKeydown = (ev) => {
      if (ev.key.toUpperCase() === sound.key) {
        props.handleSoundPlay(sound.key, sound.name);
      }
    };

    useEffect(() => {
      document.addEventListener('keydown', handleKeydown);
      return () => {
        document.removeEventListener('keydown', handleKeydown);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Col xs={4} className="pt-2 d-grid">
        <Button
          onClick={() => handleSoundPlay(sound.key, sound.name)}
          variant="success"
          size="lg"
          className="drum-pad p-5 shadow "
          type="button"
          id={idx}
        >
          <h2>{sound.key}</h2>
          <audio className="clip" src={sound.mp3} id={sound.key} />
        </Button>
      </Col>
    );
  }

  return (
    <Fragment>
      {props.sounds.map((sound, index) => (
        <Box
          key={index}
          sound={sound}
          idx={index}
          handleSoundPlay={props.handleSoundPlay}
        />
      ))}
      <Show show={props.show} />
    </Fragment>
  );
};
