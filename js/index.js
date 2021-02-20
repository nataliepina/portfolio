const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Text Animation 
const textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


// Dark Mode Theme
function darkMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}

// Toggle Dark Mode
const button = document.querySelector('.dark-mode-btn');


// Sakura Theme Functionality 

// This is used to remember the theme selected
const themeSwitch = document.querySelector('.theme-switch');
themeSwitch.checked = localStorage.getItem('switchedTheme') === 'true';

themeSwitch.addEventListener('change', function(e) {
  if (e.currentTarget.checked === true) {
    // Add item to localStorage
    localStorage.setItem('switchedTheme', 'true');
    const sakura = setInterval(fallingSakura, 500)
  } else {
    // Remove item if theme is switched back to normal
    localStorage.removeItem('switchedTheme');
    clearInterval(sakura);
  }
});

const emojis = ['🌸'];

const fallingSakura = (emoji) => {
  if(themeSwitch.checked) {
    const fall = document.createElement("div");
    fall.classList.add("fall")
    fall.innerText = emojis[Math.floor(Math.random() * emojis.length)]
    fall.style.left = Math.random() * 100 + "vw";
    fall.style.animationDuration = "6s"
    document.body.appendChild(fall)
  }
}