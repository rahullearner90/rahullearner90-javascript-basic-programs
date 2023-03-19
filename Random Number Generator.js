let delay = 3000; // delay time in milliseconds (can be modified)
let countdown = delay / 1000; // countdown starts from delay time in seconds

let countdownInterval = setInterval(function() {
  countdown--;
  console.log(`Generating random number in ${countdown} seconds...`);
  if (countdown === 0) {
    clearInterval(countdownInterval);
    let randomNumber = Math.floor(Math.random() * 100); // generates a random number between 0 and 99
    console.log(`Random number generated: ${randomNumber}`);
  }
}, 1000); // updates countdown every second (1000 milliseconds)
