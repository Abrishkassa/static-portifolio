/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Software Engineer","Programmer","Full-stack Developer","UX/UI Designer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

// Reveal photo from the left
const srPhoto = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
});
srPhoto.reveal('.about-photo', { delay: 100 });

// Reveal info from the right
const srInfo = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
});
srInfo.reveal('.about-info', { delay: 200 });


// Blog posts appear from bottom
const srBlog = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 1500,
  reset: true
});

// Reveal each blog post with a slight stagger
srBlog.reveal('.blog-post', {
  interval: 150, // Delay between each post animation
  delay: 100
});



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)
/* ----- DARK AND LIGHT MODE TOGGLE ----- */
const modeToggle = document.createElement("button");
modeToggle.id = "mode-toggle";
modeToggle.innerText = "🌙"; // moon icon by default
modeToggle.style.position = "fixed";
modeToggle.style.top = "20px";
modeToggle.style.right = "20px";
modeToggle.style.zIndex = "1000";
modeToggle.style.background = "transparent";
modeToggle.style.border = "none";
modeToggle.style.fontSize = "24px";
modeToggle.style.cursor = "pointer";
document.body.appendChild(modeToggle);

let darkMode = false;

modeToggle.addEventListener("click", function () {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode");

  // Toggle icon
  modeToggle.innerText = darkMode ? "☀️" : "🌙";
});
const darkModeBtn = document.querySelector('.dark-mode-toggle');
const body = document.body;
const logo = document.getElementById('site-logo');

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Toggle logo
  if (body.classList.contains('dark-mode')) {
    logo.src = 'logo-dark.png'; // Path to dark logo
  } else {
    logo.src = 'logo-light.png'; // Path to light logo
  }
});
