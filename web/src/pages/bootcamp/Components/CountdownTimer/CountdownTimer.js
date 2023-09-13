import React from 'react';
// import { useCountdown } from '../../../../hooks/useCountdown';
import ReactDom from 'react-dom';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

const CountdownTimer = () => {
  return (
    <Countdown date={Date.now() + 10000} renderer={renderer} />
  );
}

export default CountdownTimer;