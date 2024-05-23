const swup = new Swup();
const splash = document.querySelector('.splash');



function initializePage() {

    const imageContainer = document.querySelector('.image-container');

    function checkScroll() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);

        const triggerOffset = 10;

        if (distanceFromBottom <= triggerOffset) {
            imageContainer.classList.remove('show');

        } else {

            const triggerPosition = 10;
            if (scrollPosition > triggerPosition) {
                imageContainer.classList.add('show');
            } else {
                imageContainer.classList.remove('show');
            }
        }
    }
    window.addEventListener('scroll', checkScroll);

    const buttons = document.querySelectorAll('button[id^="btn-work-"]');
    let currentVisibleDiv = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetClass = button.id.replace('btn-', '');
            const targetDiv = document.querySelector(`.${targetClass}`);

            if (currentVisibleDiv && currentVisibleDiv !== targetDiv) {
                fadeOut(currentVisibleDiv, () => {
                    fadeIn(targetDiv);
                    currentVisibleDiv = targetDiv;
                });
            } else if (!currentVisibleDiv) {
                fadeIn(targetDiv);
                currentVisibleDiv = targetDiv;
            }
        });
    });

    function fadeIn(element) {
        element.style.display = 'block';
        requestAnimationFrame(() => {
        element.style.transition = 'opacity 0.5s ease-in-out';
        element.style.opacity = '1';
    });
    }
    function fadeOut(element, callback) {
        element.style.transition = 'opacity 0.5s';
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.display = 'none';
            if (callback) callback();
        }, 500); // Match this duration with the CSS transition duration
    }

    const mainElement = document.querySelector('main');
    const body = document.body;

    if (mainElement.querySelector('.work-present')) {
        body.style.backgroundColor = '#000000';
    } else {
        body.style.backgroundColor = '#FCFBF4';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const splashShownBefore = localStorage.getItem('splashShown');
    if (!splashShownBefore) {
        setTimeout(() => {
            splash.classList.add('display-none');
            localStorage.setItem('splashShown', 'true');
        }, 5000);
    } else {
        splash.classList.add('display-none');
    }
    window.scrollTo(0, 0);
    if (splashShownBefore !== 'true') {
        disableScroll();
    }

    initializePage();

    swup.hooks.on('page:view', () => {
        initializePage();
    });
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

const btn_work = document.getElementById('btn_work');
const workContainer = document.querySelector('.work-container');

workContainer.style.opacity = '0';

btn_work.addEventListener('click', () => {
    if (workContainer.classList.contains('work-show')) {
        // Fade out
        workContainer.style.opacity = '0';
        setTimeout(() => {
            workContainer.classList.remove('work-show');
            workContainer.style.display = 'none';
        }, 500);
    } else {
        // Fade in
        workContainer.style.display = 'flex';
        setTimeout(() => {
            workContainer.style.opacity = '1';
            workContainer.classList.add('work-show');
        }, 10);
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
            aboutContainer.classList.remove('show');
            aboutContainer.style.display = 'none';
        }, 500); // Match this duration with the CSS transition duration
    } else {
        // Fade in
        aboutContainer.style.display = 'block';
        setTimeout(() => {
            aboutContainer.style.opacity = '1'; // Set opacity to 1 after showing the container
            aboutContainer.classList.add('show');
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

setTimeout(function() {
    const splashShownBefore = localStorage.getItem('splashShown');
    if (splashShownBefore === 'true') {
        // If the splash screen has been shown before, enable scrolling after a delay
        enableScroll();
    }
}, 5500);

document.addEventListener('swup:contentReplaced', () => {

    if (document.body.classList.contains('work')) {
        document.body.style.backgroundColor = '#000000';
    } else {
        document.body.style.backgroundColor = '#FCFBF4';
    }
});


swup.hooks.on('page:view', () => {
    initializePage();
});
