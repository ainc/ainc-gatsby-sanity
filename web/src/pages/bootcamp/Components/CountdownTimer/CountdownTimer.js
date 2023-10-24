import React from 'react';
// import { useCountdown } from '../../../../hooks/useCountdown';
import ReactDom from 'react-dom';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {days}d {hours}h {minutes}m {seconds}s
      </span>
    );
  }
};

const CountdownTimer = (props) => {
  return (
    <div className="text-center mt-3 mb-3" style={{fontWeight: 'bold'}}>
      <Countdown  date={props.date} renderer={renderer} />
    </div>
  );
}

export default CountdownTimer;