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




// SCROLL

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container");

gsap.to(container, {
  x: () => -(container.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    id: "horizontalScroll",
    trigger: ".wrapper",
    pin: true,
    scrub: 2,
    end: () => "+=" + container.scrollWidth
  }
});

const st = ScrollTrigger.getById("horizontalScroll");

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    // Get position relative to container
    const totalWidth = container.scrollWidth - window.innerWidth;
    const targetX = target.offsetLeft;

    // Convert to ScrollTrigger progress (0 → 1)
    const progress = targetX / totalWidth;

    // Convert progress → vertical scroll position
    const scrollY = st.start + progress * (st.end - st.start);

    gsap.to(window, {
      scrollTo: { y: scrollY },
      duration: 1,
      ease: "power2.inOut"
    });
  });
});