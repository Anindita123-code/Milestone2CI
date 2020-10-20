
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

//const ApiKey = "AIzaSyCeetcMkyfLKX-96r4V__MikIyrXS17Hjw";
const norwayLat = 59.906932;
const norwayLng = 10.721243;
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
var searchCountry = sessionStorage.getItem("searchCountry");

var map;
let service;
let infowindow;
let country;

if (searchCountry === null || searchCountry === "null"){
    document.getElementById("selected_country").innerText = " : -- No Selection Made --";
}
else{
    document.getElementById("selected_country").innerText = " : " + searchCountry;
    setCountry(searchCountry);
}
function initMap() {
   
    switch(searchCountry){
        case 'Aland':
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: {
                    lat: alandLat,
                    lng: alandLng
                }
            });
            // country = new google.maps.LatLng(alandLat, alandLng);
            break;
        case 'Denmark': 
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: {
                    lat: denmarkLat,
                    lng: denmarkLng
                }
            });
   
            //country = new google.maps.LatLng(denmarkLat, denmarkLng);
            break;
        case 'Norway':
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: {
                    lat: norwayLat,
                    lng: norwayLng
                }
            });
            //console.log("Norway...." + norwayLat + "..." + norwayLng);
            //country = new google.maps.LatLng(norwayLat, norwayLng);
            break;
        case 'Sweden':
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: {
                    lat: swedenLat,
                    lng: swedenLng
                }
            });
            //country = new google.maps.LatLng(swedenLat, swedenLng);
            break;
        case 'Greenland':
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: {
                    lat: greenlandLat,
                    lng: greenlandLng
                }
            });
            //country = new google.maps.LatLng(greenlandLat, greenlandLng);
            break;
        case 'Finland':
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: {
                    lat: finlandLat,
                    lng: finlandLng
                }
            });
            //country = new google.maps.LatLng(finlandLat, finlandLng);
            break;
        case 'Faroe':
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: {
                    lat: faroeLat,
                    lng: faroeLng
                }
            });    
        
        //country = new google.maps.LatLng(faroeLat, faroeLng);
            break;
    
    }
    // console.log(country);
   // infowindow = new google.maps.InfoWindow();
   // map = new google.maps.Map(document.getElementById("map"), {
   //     center: country,
   //     zoom: 10,
   // });

    //business_status, formatted_address, geometry, icon,name, 
    // permanently_closed (deprecated), photos, place_id, plus_code, types
   

    const request = {
        query: "Art Galleries and Museums of " + searchCountry,
        fields: ["place_id", "name", "geometry", "formatted_address", "business_status", "icon"],
    };
    service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(results.length);
            
            for (let i = 0; i < results.length; i++) {
                console.log(results[i]);
                fetchSearchResults(results[i]);
                createMarker(results[i].geometry.location);
            }
        map.setCenter(results[0].geometry.location);
        }
    });
}

function createMarker(place) {

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    console.log(place); 
    // var markers = locations.map(function(place, i) {
    //     return new google.maps.Marker({
    //         position: location,
    //         label: labels[i % labels.length]
    //     });
    // });

    // var markerCluster = new MarkerClusterer(map, markers, {
    //     imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    // });
    
    // var marker = new google.maps.Marker({map,
    // position: place.geometry.location,
    // label: labels[i % labels.length]
//   });
  //google.maps.event.addListener(marker, "click", () => {
  //  infowindow.setContent(place.name);
  //  infowindow.open(map);
  //});
}

// **************** End Google Map *****************
 
 function setCountry(countryName){
    
    let country = document.getElementById(countryName);
    
    let anchorElement = country.childNodes;
    for(var i=0; i<anchorElement.length; i++){
        if(i==1){ // targeting the img tag in the anchors
            anchorElement[1].style.borderStyle='solid'; 
            anchorElement[1].style.borderWidth='5px'; 
        }
    }
}



function searchByCountry(countryName){
    sessionStorage.setItem("searchCountry", countryName);
}

function clearSession()
{
    sessionStorage.removeItem("searchCountry");
    sessionStorage.clear;
}

function fetchSearchResults(place){
    
    //$.when(
       // $.getJSON(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY`);}
    // .then{}
    
    $("#GallerySearchResults").html(`
        <span class="col-md-8">
            Name : ${place.name} &nbsp; | &nbsp; Address:${place.formatted_address} <br> Business Status: ${place.business_status}
           <br> <img src="${place.icon}" alt="thumbnail image of gallery">
        </span>
        <span class="col-md-4">
            <button type="button" name="myWish" id="myWish" onclick="addtoWishList(${place.place_id})" >add to wishlist</button>
           
        </span>
    `);
}

function addtoWishList(placeId){
    alert("this is under construction now for Place-ID - " + placeId);
}