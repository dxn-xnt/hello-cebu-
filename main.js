const scrollableOuter = document.getElementById('scrollableOuter');
const scrollableInner = document.getElementById('scrollableInner');

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