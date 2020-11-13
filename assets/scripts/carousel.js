//*** Set the slide Index *****/
var slideIndex = 1;
showSlides(slideIndex);

//************************************** */
// Function to call the showSlides function by adding the number to the index
//************************************** */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//************************************** */
// Function to call the showSlide function with the same index
//************************************** */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//*************************************** */
// Function to Display only the current slides and hides all the other slides 
//*************************************** */
function showSlides(n) {
console.log(n);
  let i;
  let slides = document.getElementsByClassName("picSlides");
  let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
       slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

