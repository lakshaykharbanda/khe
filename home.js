// Selecting elements from the DOM
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const counter = document.querySelector('.counter');

let currentSlide = 0;
const totalSlides = slides.length;

// Initialize the slider by showing the first slide
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Show the slide with the given index
    slides[index].classList.add('active');

    // Update the counter display
    counter.textContent = `${index + 1} / ${totalSlides}`;
}

// Show the next slide
function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop back to the first slide
    }
    showSlide(currentSlide);
}

// Show the previous slide
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop back to the last slide
    }
    showSlide(currentSlide);
}

// Automatic slideshow function
function startSlideshow() {
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Initialize the slider and start the slideshow
showSlide(currentSlide);
startSlideshow();


const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
