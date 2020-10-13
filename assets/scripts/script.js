
//alert("scripts.js called");
// **************** Carousel Script *********
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("picSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) 
  {
      slideIndex = 1
  }    
  if (n < 1) 
  {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slides[slideIndex-1]);
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
//************** End Carousel Script */

// Google Maps Coding

const ApiKey = "AIzaSyCeetcMkyfLKX-96r4V__MikIyrXS17Hjw";

let map;
let service;
let infowindow;

function initMap() {
  const sydney = new google.maps.LatLng(-33.867, 151.195);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 15,
  });
  const request = {
    query: "Museum of Contemporary Art Australia",
    fields: ["name", "geometry"],
  };
  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });
  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name);
    infowindow.open(map);
  });
}
