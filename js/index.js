const slides = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let timer;

function showSlide(n) {
  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = n;
  }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[currentSlide].style.display = "block";
  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

function jumpToSlide(n) {
  showSlide(n);
}

function startTimer() {
  timer = setInterval(() => {
    nextSlide();
  }, 3000); // Change the interval (in milliseconds) to adjust the slide duration
}

function stopTimer() {
  clearInterval(timer);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    jumpToSlide(index);
    stopTimer();
    startTimer();
  });
});

startTimer();
// mall-slider
const mslides = document.querySelectorAll(".mallslider img");
const mdots = document.querySelectorAll(".malldot");

let mcurrentSlide = 0;
let mtimer;

function mshowSlide(n) {
  if (n < 0) {
    mcurrentSlide = mslides.length - 1;
  } else if (n >= mslides.length) {
    mcurrentSlide = 0;
  } else {
    mcurrentSlide = n;
  }

  mslides.forEach((mallslide) => {
    mallslide.style.display = "none";
  });

  mdots.forEach((malldot) => {
    malldot.classList.remove("active");
  });

  mslides[mcurrentSlide].style.display = "block";
  mdots[mcurrentSlide].classList.add("active");
}

function mnextSlide() {
  mshowSlide(mcurrentSlide + 1);
}

function mpreviousSlide() {
  mshowSlide(mcurrentSlide - 1);
}

function mjumpToSlide(n) {
  mshowSlide(n);
}

function mstartTimer() {
  mtimer = setInterval(() => {
    mnextSlide();
  }, 3000); // Change the interval (in milliseconds) to adjust the slide duration
}

function mstopTimer() {
  clearInterval(mtimer);
}

mdots.forEach((malldot, index) => {
  malldot.addEventListener("click", () => {
    mjumpToSlide(index);
    mstopTimer();
    mstartTimer();
  });
});

mstartTimer();
// stiky
window.addEventListener('scroll', function() {
  var footer = document.querySelector('.home-footer');
  var stickyElement = document.querySelector('.suggest-today');

  if (footer.getBoundingClientRect().top <= window.innerHeight) {
    stickyElement.style.position = 'absolute';
    stickyElement.style.top = (footer.getBoundingClientRect().top - window.innerHeight) + 'px';
  } else {
    stickyElement.style.position = 'sticky';
    stickyElement.style.top = '119px';
  }
});
//clock
const countDownDate = new Date("Aug 20, 2023 12:00:00").getTime();
const countdownHours = document.querySelector(".countdownHours");
const countdownMinutes = document.querySelector(".countdownMinutes");
const countdownSeconds = document.querySelector(".countdownSeconds");

const x = setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownHours.innerHTML = hours >= 10 ? hours : `0${hours}`;
  countdownMinutes.innerHTML = minutes >= 10 ? minutes : `0${minutes}`;
  countdownSeconds.innerHTML = seconds >= 10 ? seconds : `0${seconds}`;

  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);