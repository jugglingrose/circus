/**
 * Lightbox Modal functionality for image gallery.
 * Refactored to modern JavaScript (ES6+).
 */

let slideIndex = 1;

/**
 * Opens the modal by setting its display style.
 */
function openModal() {
  const modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "block";
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  }
}

/**
 * Closes the modal by setting its display style.
 */
function closeModal() {
  const modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "none";
    // Restore body scrolling
    document.body.style.overflow = "auto";
  }
}

/**
 * Adjusts the current slide index by n and updates the display.
 * @param {number} n - The number of slides to advance (positive or negative).
 */
function plusSlides(n) {
  showSlides((slideIndex += n));
}

/**
 * Sets the current slide index to n and updates the display.
 * @param {number} n - The slide index to display.
 */
function currentSlide(n) {
  showSlides((slideIndex = n));
}

/**
 * Updates the visibility of slides and active state of thumbnails/dots.
 * @param {number} n - The index of the slide to show.
 */
function showSlides(n) {
  const slides = document.querySelectorAll(".mySlides");
  // const dots = document.querySelectorAll('.demo');
  // const captionText = document.getElementById('caption');

  if (slides.length === 0) return;

  // Wrap around logic
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Show active slide
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }
}
