const swup = new Swup({
    plugins: [new SwupPreloadPlugin(), new SwupBodyClassPlugin(), new SwupFadeTheme()]
});
const splash = document.querySelector('.splash');

function initializePage() {

    const imageContainer = document.querySelector('.image-container');

    function checkScroll() {
        const scrollPosition = window.scrollY;

        const triggerPosition = 10;
        if (scrollPosition > triggerPosition) {
            imageContainer.classList.add('show');
        } else {
            imageContainer.classList.remove('show');
        }
    }

    window.addEventListener('scroll', checkScroll);

    const fadeInElement = document.querySelector('.work-content');
    if (fadeInElement) {
        const iframe = fadeInElement.querySelector('iframe');
        if (iframe) {
            iframe.addEventListener('load', () => {
                fadeInElement.classList.add('video-show');
            });
        } else {
            fadeInElement.classList.add('video-show');
        }
    }
    restoreWorkContainerState();
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


    initializePage();

    swup.hooks.on('page:view', () => {
        initializePage();
    });
});

function restoreWorkContainerState() {
    const workContainer = document.querySelector('.work-container');
    if (workContainer) {
        const workContainerState = localStorage.getItem('workContainerState');
        if (workContainerState === 'visible') {
            workContainer.style.display = 'flex';
            requestAnimationFrame(() => {
                workContainer.style.opacity = '1';
                workContainer.classList.add('work-show');
            });
        } else {
            workContainer.style.opacity = '0';
            workContainer.style.display = 'none';
            workContainer.classList.remove('work-show');
        }
    }
}


window.addEventListener('load', () => {
    const fadeInElement = document.querySelector('.work-content');
    if (fadeInElement) {
        fadeInElement.classList.add('initial-visible');
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

const btn_work = document.getElementById('btn_work');
const workContainer = document.querySelector('.work-container');

btn_work.addEventListener('click', () => {
    if (workContainer.classList.contains('work-show')) {
        workContainer.style.opacity = '0';
        setTimeout(() => {
            workContainer.classList.remove('work-show');
            workContainer.style.display = 'none';
            localStorage.setItem('workContainerState', 'hidden');

        }, 500);
    } else {
        workContainer.style.display = 'flex';
        setTimeout(() => {
            workContainer.style.opacity = '1';
            workContainer.classList.add('work-show');
            localStorage.setItem('workContainerState', 'visible');
        }, 10);
    }
});


const btn_about = document.getElementById('btn_about');
const aboutContainer = document.querySelector('.about');
const videoContainer = document.querySelector('.container-prague');

aboutContainer.style.opacity = '0';

btn_about.addEventListener('click', () => {
    if (aboutContainer.classList.contains('show')) {
        aboutContainer.style.opacity = '0';
        setTimeout(() => {
            aboutContainer.classList.remove('show');
            aboutContainer.style.display = 'none';
        }, 500);
    } else {
        aboutContainer.style.display = 'block';
        setTimeout(() => {
            aboutContainer.style.opacity = '1';
            aboutContainer.classList.add('show');
        }, 250);
    }
    /*
    if (videoContainer.classList.contains('show')) {
        videoContainer.style.opacity = '0';
        setTimeout(() => {
            videoContainer.classList.remove('show');
            videoContainer.style.display = 'none';
        }, 500);
    }
    */
});

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    if (videoContainer.classList.contains('show')) {
        // Fade out
        videoContainer.style.opacity = '0';
        setTimeout(() => {
            videoContainer.classList.remove('show');
            videoContainer.style.display = 'none';
        }, 500);
    } else {
        videoContainer.style.display = 'block';
        setTimeout(() => {
            videoContainer.classList.add('show');
            videoContainer.style.opacity = '1';
        }, 10);
    }
});

let isToggleTextVisible = false;

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
    // videoContainer.classList.remove('show');

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
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

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
} catch (e) { }

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

setTimeout(function () {
    const splashShownBefore = localStorage.getItem('splashShown');
    if (splashShownBefore === 'true') {
        // If the splash screen has been shown before, enable scrolling after a delay
        enableScroll();
    }
}, 5500);

function isMobile() {
    return window.matchMedia('(max-width: 640px)').matches; // Adjust breakpoint as needed
}

function hideWorkContainer() {
    const workContainer = document.querySelector('.work-container');
    if (workContainer) {
        // Start fade-out by adding the hidden class
        workContainer.classList.add('hidden');

        // Wait for the transition to complete (500ms) before setting display: none
        setTimeout(() => {
            workContainer.style.display = 'none';
            workContainer.classList.remove('work-show'); // Ensure the "show" class is removed
            localStorage.setItem('workContainerState', 'hidden');
        }, 500); // Match the CSS transition duration
    }
}

swup.hooks.on('page:view', () => {   
    if (isMobile()) {
        hideWorkContainer(); // Run fade-out logic
    } 
    initializePage();
});

swup.hooks.on('content:replace', () => {
    if (isMobile()) {
        // Ensure this logic runs only on mobile
        hideWorkContainer();
    }
});

function loadWorkContainer() {
    const workContainers = document.querySelectorAll('.work-container');
    if (!workContainers.length) return;

    fetch('work.html')
        .then(response => response.text())
        .then(html => {
            workContainers.forEach(container => {
                container.innerHTML = html;
            });

            // Restore any stored state
            restoreWorkContainerState();

            // Reattach event listeners if needed
            const btn_work = document.getElementById('btn_work');
            if (btn_work) {
                btn_work.addEventListener('click', () => {
                    const workContainer = document.querySelector('.work-container');
                    if (workContainer.classList.contains('work-show')) {
                        workContainer.style.opacity = '0';
                        setTimeout(() => {
                            workContainer.classList.remove('work-show');
                            workContainer.style.display = 'none';
                            localStorage.setItem('workContainerState', 'hidden');
                        }, 500);
                    } else {
                        workContainer.style.display = 'flex';
                        setTimeout(() => {
                            workContainer.style.opacity = '1';
                            workContainer.classList.add('work-show');
                            localStorage.setItem('workContainerState', 'visible');
                        }, 10);
                    }
                });
            }
        })
        .catch(error => console.error('Error loading work container:', error));
}

// Initialize on page load and Swup page:view
document.addEventListener('DOMContentLoaded', loadWorkContainer);
swup.hooks.on('page:view', loadWorkContainer);
