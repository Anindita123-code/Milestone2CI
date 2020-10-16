
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
   // console.log(slides[slideIndex-1]);
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
//************** End Carousel Script */

// Google Maps Coding

//*************** Global Variables *************** */

const ApiKey = "AIzaSyCeetcMkyfLKX-96r4V__MikIyrXS17Hjw";
const norwayLat = 60.765172;
const norwayLng = 8.095888;
const swedenLat = 57.522434;
const swedenLng = 14.775575;
const denmarkLat = 56.291470;
const denmarkLng = 10.591553;
const greenlandLat = 75.278541;
const greenlandLng = -43.408019;
const finlandLat = 63.000747;
const finlandLng = 26.992372;
const faroeLat = 61.8948697;
const faroeLng = -8.0752449;
const alandLat = 60.2588775;
const alandLng = 19.227217;

//Global Variable for countrySearch
var searchCountry = 'Denmark';

let map;
let service;
let infowindow;
let country;

function initMap() {
    // console.log('Initmap ' + searchCountry)
    switch(searchCountry){
        case 'Denmark': 
            country = new google.maps.LatLng(denmarkLat, denmarkLng);
            break;
        case 'Norway':
            country = new google.maps.LatLng(norwayLat, norwayLng);
            break;
        case 'Sweden':
            country = new google.maps.LatLng(swedenLat, swedenLng);
            break;
        case 'Greenland':
            country = new google.maps.LatLng(greenlandLat, greenlandLng);
            break;
        case 'Finland':
            country = new google.maps.LatLng(finlandLat, finlandLng);
            break;
        case 'Faroe':
            country = new google.maps.LatLng(faroeLat, faroeLng);
            break;
        case 'Aland':
            country = new google.maps.LatLng(alandLat, alandLng);
            break;
    }
    // console.log(country);
    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
        center: country,
        zoom: 12,
    });
    const request = {
        query: "Art Galleries of " + searchCountry,
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

// **************** End Google Map *****************
// var htmlBody = document.querySelector('body');
// htmlBody.addEventListener('onload', setDefaultMap('Denmark'));

function setDefaultMap(countryName){
    var country = document.getElementById("Denmark");
    var anchorElement = country.childNodes;
    for(var i=0; i<anchorElement.length; i++){
        if(i==1){ // targeting the img tag in the anchor
            anchorElement[1].style.borderStyle='solid'; 
            anchorElement[1].style.borderWidth='5px'; 
        }
    }
}

function searchByCountry(countryName){
    searchCountry = countryName;
    console.log(searchCountry)
}
// var thumbImgSweden = document.getElementById('Sweden');
// thumbImgSweden.addEventListener('onclick', searchByCountry('Swedem'));

// var thumbImgNorway = document.getElementById('Norway');
// thumbImgNorway.addEventListener('onclick', searchByCountry('Norway'));

// var thumbImgDenmark = document.getElementById('Denmark');
// thumbImgDenmark.addEventListener('onclick', searchByCountry('Denmark'));

// var thumbImgFinland = document.getElementById('Finland');
// thumbImgFinland.addEventListener('onclick', searchByCountry('Finland'));

// var thumbImgGreenland = document.getElementById('Greenland');
// thumbImgGreenland.addEventListener('onclick', searchByCountry('Greenland'));

// var thumbImgFaroe = document.getElementById('Faroe');
// thumbImgFaroe.addEventListener('onclick', searchByCountry('Faroe'));

// var thumbImgAland = document.getElementById('Aland');
// thumbImgAland.addEventListener('onclick', searchByCountry('Aland'));

