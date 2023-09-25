import React from 'react';
// import { useCountdown } from '../../../../hooks/useCountdown';
import ReactDom from 'react-dom';
import Countdown from 'react-countdown';

// // Random component
// const Completionist = () => <span>You are good to go!</span>;


// // Renderer callback with condition
// const renderer = ({ hours, minutes, seconds, completed }) => {
//   if (completed) {
//     // Render a complete state
//     return <Completionist/>;
//   } else {
//     // Render a countdown
//     return (
//       <span>
//         {hours}:{minutes}:{seconds}
//       </span>
//     );
//   }
// };

// const CountdownTimer = () => {
//   return (
//     <div>
//     <Countdown date={Date.now() + 10000} renderer={renderer} />
//     </div>
//   );
// }


// Random component
let upcoming
const Completionist = () => <span> Deadline passed!</span>;



// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist/>;
    
  } else {
    // Render a countdown
    return (
      <div>
          <strong>{days}d {hours}h {minutes}m {seconds}s </strong>
      </div>
    );
  }
};



const CountdownTimer = props => {
  const earlyApplication = new Date(props.countdownTime.earlyApplication) 
  const earlyRegistration = new Date(props.countdownTime.earlyRegistration) 
  let deadline
  const now = Date.now()
  

  if (earlyApplication < earlyRegistration && earlyApplication > now){
    deadline = earlyApplication
    
  }
  else {
    deadline = earlyRegistration
  
  }

  
  return (
    <div>
      <Countdown date={deadline} renderer={renderer}/>
    </div>
  );
}

export default CountdownTimer;