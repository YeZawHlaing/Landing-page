// =========================================
// 1. MOBILE NAVIGATION MENU TOGGLE
// =========================================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
    });
});

// =========================================
// 2. PREMIUM CAROUSEL WITH JUMP & DOTS
// =========================================
let currentSlide = 0;
let autoPlayTimer;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

// Function to show a specific slide
function showSlide(index) {
    // Correct bound wrapping
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Toggle slide and dot indicator visual markers
    slides.forEach((slide, i) => {
        if (i === currentSlide) {
            slide.classList.add('active');
            indicators[i].classList.add('active');
        } else {
            slide.classList.remove('active');
            indicators[i].classList.remove('active');
        }
    });

    // Reset the interval timer to avoid jumping too soon after clicking
    resetAutoPlay();
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function jumpToSlide(index) {
    showSlide(index);
}

function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(() => {
        changeSlide(1);
    }, 6000); // Transitions automatically every 6 seconds
}

// Initial AutoPlay loop start
resetAutoPlay();

// =========================================
// 3. ENTRANCE SCROLL ANIMATION (UP & DOWN)
// =========================================
const revealElements = document.querySelectorAll('.reveal');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animates fully into focus
            entry.target.classList.add('active');
        } else {
            // Allows animation to repeat when scrolling backward 
            // Only targets off-screen elements for maximum stability and bounce performance
            const bounds = entry.boundingClientRect;
            if (bounds.top > 0 || bounds.bottom < 0) {
                 entry.target.classList.remove('active');
            }
        }
    });
}, {
    threshold: 0.08 // Triggers faster at 8% visible margin
});

revealElements.forEach(el => scrollObserver.observe(el));

// Navbar compact responsive scroll transitions
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});