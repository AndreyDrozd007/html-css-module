let slideIndex = 1;

const showSlides = n => {
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

const currentSlide = n => {
  showSlides((slideIndex = n));
}

const plusSlide = () => {
  showSlides((slideIndex += 1));
}

const minusSlide = () => {
  showSlides((slideIndex -= 1));
}

showSlides(slideIndex);