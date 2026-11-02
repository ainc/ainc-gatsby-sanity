import React from "react";
// import { useCountdown } from '../../../../hooks/useCountdown';
import ReactDom from "react-dom";
import Countdown from "react-countdown";
import SEO from "../../../../components/seo";

// Random component
const Completionist = () => <span>CLOSED</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
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
    <>
      <SEO
        title="Countdown Timer"
        meta={[
          {
            name: "robots",
            content: "noindex, nofollow",
          },
        ]}
      />
      <div className="text-center mt-3 mb-3" style={{ fontWeight: "bold" }}>
        <Countdown date={props.date} renderer={renderer} />
      </div>
    </>
  );
};

export default CountdownTimer;
