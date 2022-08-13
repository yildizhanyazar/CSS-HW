function openNav() {
   document.getElementById("yanMenu").style.width = "250px";
}
function closeNav() {
   document.getElementById("yanMenu").style.width = "0";
}
function darkModeOn() {
   let element = document.body;
   element.classList.toggle("darkMode");
}

// Sliders---------------------------------------------------------------->
let slidIndex = 0;
showSlides();

function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   slidIndex++;
   if (slidIndex > slides.length) {
      slidIndex = 1;
   }
   slides[slidIndex - 1].style.display = "block";
   setTimeout(showSlides, 8000);
}
