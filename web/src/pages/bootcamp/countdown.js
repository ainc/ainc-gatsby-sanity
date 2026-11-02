const Countdown = (props) => {
  const date = props.data;

  // Set the date we're counting down to
  // const countDownDate = new Date("Jul 14, 2023 00:00:00").getTime()
  const countDownDate = new Date(date).getTime();

  // Update the count down every 1 second
  // var x = setInterval(function() {

  //     // Get today's date and time
  //     var now = new Date().getTime();

  //     // Find the distance between now and the count down date
  //     var distance = countDownDate - now;

  //     // Time calculations for days, hours, minutes and seconds
  //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     // Display the result in the element with id="countdown"
  //     // document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  //     // If the count down is finished, write some text
  //     if (distance < 0) {
  //         clearInterval(x);
  //         document.getElementById("countdown").innerHTML = "CLOSED";
  //       }
  // },1000);

  return null;

  // const earlyRegistration = (props.data.earlyRegistration)
  // const earlyApplication = (props.data.earlyApplication)

  // // Set the date we're counting down to
  // // const countDownDate = new Date("Jul 14, 2023 00:00:00").getTime()
  // const countDownRegister = new Date(earlyRegistration).getTime();
  // const countDownApplication = new Date(earlyApplication).getTime();

  // // Update the count down every 1 second
  // var x = setInterval(function() {

  //     // Get today's date and time
  //     var now = new Date().getTime();

  //     var distanceRegister = countDownRegister - now;
  //     var distanceApplication = countDownApplication - now;

  //     if (distanceApplication < distanceRegister){
  //         var distance = distanceApplication
  //         var nextDistance = distanceRegister
  //     }
  //     else if (distanceApplication > distanceRegister){
  //         var distance = distanceRegister
  //         var nextDistance = distanceApplication
  //     }

  //     // Time calculations for days, hours, minutes and seconds
  //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     // Display the result in the element with id="countdown"
  //     document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  //     // If the count down is finished, write some text
  //     if (distance < 0) {
  //         // clearInterval(x);

  //         var days = Math.floor(nextDistance / (1000 * 60 * 60 * 24));
  //         var hours = Math.floor((nextDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //         var minutes = Math.floor((nextDistance % (1000 * 60 * 60)) / (1000 * 60));
  //         var seconds = Math.floor((nextDistance % (1000 * 60)) / 1000);

  //         document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  //         // document.getElementById("countdown").innerHTML = "CLOSED";
  //       }
  // },1000);

  // return null;
};

export default Countdown;
