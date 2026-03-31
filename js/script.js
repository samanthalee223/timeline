// CLOCK

function updateClock() {
    const now = new Date();
    // Specify the target time zone using the IANA time zone identifier (e.g., 'America/New_York')
     const month = now.toLocaleString('en-US', { month: 'numeric' }).toLowerCase();
     const day = now.getDate();
     const year = now.getFullYear();

     const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false // Set to false for 24-hour format
    };

    const liveClock = now.toLocaleString('en-US', options);

    const timeString = `${month}.${day}.${year}`;

    
    // Update the HTML element
    document.getElementById('clock').textContent = timeString + " " + liveClock;
}

// Update the clock immediately on page load
updateClock();

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);




// ANIMATIONS

//gsap.to(".guide-line", {
     //scrollTrigger: {
          //trigger: '.guide-line', // start animation when ".box" enters the viewport
          //toggleActions: "restart pause resume none",
          //start: "100px",
          //end: "1000px",
          ////pin: true,
          //markers: true,
          //scrub: 1,
          //horizontal: true,
     //},
     //x: 1000
//});

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container");

gsap.to(container, {
  x: () => -(container.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper",
    pin: true,
    scrub: 2,
    end: () => "+=" + container.scrollWidth
  }
});