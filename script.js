// Burger menu
const burgerBtn = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const burgerLines = document.querySelector(".burger-line");

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burgerLines.classList.toggle("active");
});

navMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle("active");
  burgerLines.classList.toggle("active");
})

// Animation price-block on scroll
function scrollAppear() {
  let priceTable = document.querySelector(".price-table tbody");
  let introPosition = priceTable.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.2;

  if (introPosition < screenPosition) {
    priceTable.classList.add("animationFadeRight");
  } else {
    priceTable.classList.remove("animationFadeRight");
  }
}
window.addEventListener("scroll", scrollAppear);

// Modal lightbox/slider
let sliderImg = document.querySelector(".slide img");
let galleryImg = document.querySelectorAll(".gallery img");
galleryImg.forEach((element) => {
  element.addEventListener("click", openModal);
});

document.body.addEventListener("keyup", (event) => {
  if (event.keyCode === 37) {
    plusSlide(-1);
  } else if (event.keyCode === 39) {
    plusSlide(1);
  } else if (event.keyCode === 27) {
    closeModal();
  }
});

function openModal() {
  document.getElementById("gallery-modal").style.display = "block";
  sliderImg.src = this.src;
}
function closeModal() {
  document.getElementById("gallery-modal").style.display = "none";
}

let slideIndex = 0;
showSlide(slideIndex);

function plusSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  if (n > galleryImg.length - 1) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = galleryImg.length - 1;
  }
  sliderImg.src = galleryImg[slideIndex].src;
}
