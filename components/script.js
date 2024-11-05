let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}



/* GALERIE MOBIL */
let slideIndexGal = 1;
showSlidesGal(slideIndexGal);

function plusSlidesGal(m) {
  showSlidesGal(slideIndexGal += m);
}

function currentSlideGal(m) {
  showSlidesGal(slideIndexGal = m);
}

function showSlidesGal(m) {
  let o;
  let slidesGal = document.getElementsByClassName("mySlidesGal");
  if (m > slidesGal.length) {slideIndexGal = 1}    
  if (m < 1) {slideIndexGal = slidesGal.length}
  for (o = 0; o < slidesGal.length; o++) {
    slidesGal[o].style.display = "none";  
  }
  slidesGal[slideIndexGal-1].style.display = "block";
}

function myFunction(){
  document.getElementById("popup").style.display = "block";
}

const popupr = document.getElementById("popup");
const arrows = document.getElementById("arrowss");
popupr.addEventListener('click', (event) => {
  if(!arrows.contains(event.target)){
    popupr.style.display = "none";
  }
})