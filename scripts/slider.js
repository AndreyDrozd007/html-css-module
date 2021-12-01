const INITIAL_SLIDE = 1; 
let slideIndex = INITIAL_SLIDE;
const DISPLAY_TYPES = {
  flex: "flex",
  none: "none",
}

const showSlides = n => {
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = INITIAL_SLIDE;
  } else if (n < INITIAL_SLIDE) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = DISPLAY_TYPES.none;
  }
  slides[slideIndex - INITIAL_SLIDE].style.display = DISPLAY_TYPES.flex;
}

const currentSlide = n => {
  showSlides((slideIndex = n));
}

const plusSlide = () => {
  showSlides((slideIndex += INITIAL_SLIDE));
}

const minusSlide = () => {
  showSlides((slideIndex -= INITIAL_SLIDE));
}

showSlides(slideIndex);