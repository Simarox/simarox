// slideshow.js
document.addEventListener('DOMContentLoaded', function() {
    const slideshow = document.getElementById('slideshow');
    const slides = slideshow.children;
    let currentSlide = 0;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Initial setup
    slideshow.style.transform = 'translateX(0%)';

    // Auto-advance every 3 seconds
    setInterval(nextSlide, 3000);
});