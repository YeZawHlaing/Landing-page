// =========================================
// CAROUSEL FUNCTIONALITY
// =========================================

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Function to show a specific slide
function showSlide(index) {
    // Wrap around if index goes out of bounds
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Remove 'active' class from all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Add 'active' class to the current slide
    slides[currentSlide].classList.add('active');
}

// Function triggered by Next / Prev buttons
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto-play carousel every 5 seconds (5000ms)
// Comment out the line below if you want manual sliding only
setInterval(() => {
    changeSlide(1);
}, 5000);