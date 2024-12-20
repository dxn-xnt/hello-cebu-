// Section 1: Carousel Functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll(".indicator");

const totalSlides = slides.length;
  // for the navbar
window.onscroll = function() {
    var navPanel = document.querySelector('.nav-panel');
    
    if (window.scrollY > window.innerHeight) {
        navPanel.classList.add('scrolled');  // Add 'scrolled' class when scrolling down
    } else {
        navPanel.classList.remove('scrolled');  // Remove 'scrolled' class when back to top
    }
};
// for the sidebar
function showSidebar() {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');

    sidebar.classList.add('active');
}

function hideSidebar() {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');

    sidebar.classList.remove('active');
}





function moveSlide(step) {
    const carousel = document.querySelector('.carousel');

    // Remove transition temporarily to avoid jump when cycling
    carousel.style.transition = 'none';

    slideIndex += step;

    // Loop to the beginning or end of the slides
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === slideIndex);
      });
      
    const newTransformValue = -slideIndex * 100;
    carousel.style.transform = `translateX(${newTransformValue}%)`;

    // Force a reflow to apply smooth transition
    carousel.offsetHeight; // Trigger reflow
    setTimeout(() => {
        carousel.style.transition = 'transform 0.5s ease-in-out';
    }, 50);
}

// Automatically move to the next slide every 5 seconds
setInterval(() => moveSlide(1), 5000);

// Section 2: Dynamic Outer Container Adjustment
const outerContainer = document.getElementById('featuredCuisine');
const scrollContainer = document.getElementById('scrollContainer');

// Adjust the outer container's width dynamically during scroll
scrollContainer.addEventListener('scroll', () => {
    const maxWidth = 1200; // Maximum width
    const minWidth = 570; // Minimum width
    const scrollProgress =
        (scrollContainer.scrollWidth - scrollContainer.scrollLeft - scrollContainer.clientWidth) /
        (scrollContainer.scrollWidth - scrollContainer.clientWidth);

    const newWidth = minWidth + scrollProgress * (maxWidth - minWidth);
    outerContainer.style.width = `${Math.min(Math.max(newWidth, minWidth), maxWidth)}px`;
});

// Start with the last div visible
scrollContainer.scrollLeft = scrollContainer.scrollWidth;
