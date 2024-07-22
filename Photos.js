// Array of URLs for the pages you want to cycle through
const pages = [
    "Index.html",
    "T.html",
    "T2.html",
    "OurEvents.html",
    "Ourfounders.html",
    "Ourcommitties.html"
];

// Time interval in milliseconds (e.g., 30000ms = 30 seconds)
const pageInterval = 60000; // 30 seconds for page navigation
let currentPage = parseInt(sessionStorage.getItem('currentPage')) || 0;

// Function to navigate to the next page
function navigateNext() {
    currentPage = (currentPage + 1) % pages.length;
    sessionStorage.setItem('currentPage', currentPage);
    window.location.href = pages[currentPage];
}

// Set the interval to navigate to the next page
setInterval(navigateNext, pageInterval);

// Slide navigation code
let slideIndex = 1;
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
}

// Set the interval to change slides
setInterval(() => {
    plusSlides(1);
}, 10000); // 10 seconds for slide navigation

// Show the first slide on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});
