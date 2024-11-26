const swup = new Swup();
const splash = document.querySelector('.splash');
const imageContainer = document.querySelector('.image-container');

document.addEventListener('DOMContentLoaded', () => {
    // Check if the splash screen has been shown before
    const splashShownBefore = localStorage.getItem('splashShown');
    if (!splashShownBefore) {
        // If not shown before, show the splash screen
        setTimeout(() => {
            splash.classList.add('display-none');
            // Mark splash screen as shown in local storage
            localStorage.setItem('splashShown', 'true');
        }, 5000);
    } else {
        // If shown before, hide the splash screen immediately
        splash.classList.add('display-none');
    }
});

const btn = document.getElementById('btn');
const toggleText = btn.querySelector('.toggle-text');

btn.addEventListener('click', () => {
    if (btn.classList.contains('show')) {
        // Fade out
        toggleText.style.opacity = '0';
        setTimeout(() => {
            btn.classList.remove('show');
        }, 500); // Match this duration with the CSS transition duration
    } else {
        // Fade in
        btn.classList.add('show');
        setTimeout(() => {
            toggleText.style.opacity = '1';
        }, 10); // Small delay to ensure class is set before changing opacity
    }
});

const btn_about = document.getElementById('btn_about');
const aboutContainer = document.querySelector('.about');
const videoContainer = document.querySelector('.container-prague');

// Set initial opacity of aboutContainer to 0
aboutContainer.style.opacity = '0';

btn_about.addEventListener('click', () => {
    if (aboutContainer.classList.contains('show')) {
        // Fade out
        aboutContainer.style.opacity = '0';
        setTimeout(() => {
            // aboutContainer.classList.remove('show');
            aboutContainer.style.display = 'none';
        }, 500); // Match this duration with the CSS transition duration
    } else {
        // Fade in
        aboutContainer.style.display = 'block';
        setTimeout(() => {
            aboutContainer.style.opacity = '1'; // Set opacity to 1 after showing the container
            // aboutContainer.classList.add('show');
        }, 250); // Small delay to ensure display is set before changing opacity
    }
    
    // Hide the video container if it is visible
    if (videoContainer.classList.contains('show')) {
        videoContainer.style.opacity = '0';
        setTimeout(() => {
            videoContainer.classList.remove('show');
            videoContainer.style.display = 'none';
        }, 500); // Match this duration with the CSS transition duration
    }
});

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    if (videoContainer.classList.contains('show')) {
        // Fade out
        videoContainer.style.opacity = '0';
        setTimeout(() => {
            videoContainer.classList.remove('show');
            videoContainer.style.display = 'none';
        }, 500); // Match this duration with the CSS transition duration
    } else {
        // Fade in
        videoContainer.style.display = 'block';
        setTimeout(() => {
            videoContainer.classList.add('show');
            videoContainer.style.opacity = '1';
        }, 10); // Small delay to ensure display is set before changing opacity
    }
});

let isToggleTextVisible = false; // Track the visibility state of the toggle-text

// Function to toggle the visibility of the toggle-text
function toggleTextVisibility(show) {
    if (show) {
        // Fade in
        btn.classList.add('show');
        setTimeout(() => {
            toggleText.style.opacity = '1';
        }, 10); // Small delay to ensure class is set before changing opacity
        isToggleTextVisible = true;
    } else {
        // Fade out
        toggleText.style.opacity = '0';
        setTimeout(() => {
            btn.classList.remove('show');
        }, 500); // Match this duration with the CSS transition duration
        isToggleTextVisible = false;
    }
}

btn.addEventListener('click', () => {
    toggleTextVisibility(!isToggleTextVisible); // Toggle visibility
});

btn_about.addEventListener('click', () => {
    aboutContainer.classList.toggle('show');
    videoContainer.classList.remove('show');

    // Toggle the visibility of toggle-text
    if (aboutContainer.classList.contains('show')) {
        if (!isToggleTextVisible) {
            toggleTextVisibility(true); // Ensure the toggle-text fades in
        }
    } else {
        toggleTextVisibility(false); // Ensure the toggle-text fades out
    }
});

// Function to check if the user has scrolled to the bottom of the page
function checkScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    // Calculate the distance from the bottom of the page
    const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);

    // Adjust this value as needed to determine how close to the bottom triggers the action
    const triggerOffset = 10;

    if (distanceFromBottom <= triggerOffset) {
        // User has scrolled to the bottom, hide image container
        imageContainer.style.opacity = '0';
    } else {
        // User has not scrolled to the bottom, check if image container should be shown
        const triggerPosition = 10; // Adjust this value as needed
        if (scrollPosition > triggerPosition) {
            imageContainer.style.opacity = '1';
        } else {
            imageContainer.style.opacity = '0';
        }
    }
}

// Add scroll event listener to trigger the checkScroll function
window.addEventListener('scroll', checkScroll);

// Function to check if the user has scrolled all the way up
function checkScrollTop() {
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
        imageContainer.style.opacity = '1';
    } else {
        // If the user has scrolled down again, check if the image container should be shown
        checkScroll();
    }
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    const splashShownBefore = localStorage.getItem('splashShown');
    if (splashShownBefore !== 'true') {
        // If the splash screen has not been shown before, disable scrolling
        disableScroll();
    }
});

setTimeout(function() {
    const splashShownBefore = localStorage.getItem('splashShown');
    if (splashShownBefore === 'true') {
        // If the splash screen has been shown before, enable scrolling after a delay
        enableScroll();
    }
}, 5500);