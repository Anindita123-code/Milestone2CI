
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
const greenlandLat = 66.905645;
const greenlandLng = -34.924484;
const finlandLat = 63.000747;
const finlandLng = 26.992372;
const faroeLat = 61.848012;
const faroeLng = -6.865365;
const alandLat = 60.245031;
const alandLng = 19.953666;

//Global Variable for countrySearch
var searchCountry = sessionStorage.getItem("searchCountry");
var map;
var infowindow;

if (searchCountry === null || searchCountry === "null"){
    document.getElementById("selected_country").innerText = " : -- No Selection Made --";
}
else{
    document.getElementById("selected_country").innerText = " : " + searchCountry;
    setCountry(searchCountry); // highlights the country thumbnail
}

function initMap() {
    infowindow = new google.maps.InfoWindow();
    switch(searchCountry){
        case 'Aland':
            var country = new google.maps.LatLng(alandLat, alandLng);
            break;
        case 'Denmark': 
            var country = new google.maps.LatLng(denmarkLat, denmarkLng);
            break;
        case 'Norway':
            var country = new google.maps.LatLng(norwayLat, norwayLng);
            break;
        case 'Sweden':
            var country = new google.maps.LatLng(swedenLat, swedenLng);
            break;
        case 'Greenland':
            var country = new google.maps.LatLng(greenlandLat, greenlandLng);
            break;
        case 'Finland':
            var country = new google.maps.LatLng(finlandLat, finlandLng);
            break;
        case 'Faroe':
            var country = new google.maps.LatLng(faroeLat, faroeLng);
            break;
        default:
            var country = new google.maps.LatLng(59.559208, 11.244315);
    }
   
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: country
    });    

    //console.log(map);
    //business_status, formatted_address, geometry, icon,name, 
    // permanently_closed (deprecated), photos, place_id, plus_code, types
   
    var request = {
        location: country,
        radius: '1000',
    
        query: searchCountry + " Art galleries + museum",
        fields: ["place_id", "name", "geometry", "formatted_address", "business_status", "photos"],
    };
    
    var service = new google.maps.places.PlacesService(map);
     
    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log("nearby search" + results.length);
            
            for (let i = 0; i < results.length; i++) {
               // console.log(results[i]);
                //fetchSearchResults(results[i]);
                createMarker(results[i],i);
            }
            //map.setCenter(results[0].geometry.location);
        }
    });
}

function createMarker(place,i) {

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
   // console.log(place); 
    const marker = new google.maps.Marker({map,
        position: place.geometry.location,
        label: labels[i % labels.length]
    });
    
    google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name);
        infowindow.open(map);
  });
}

    /*function callback(results, status) {
         if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                fetchSearchResults(results[i]);
                // createMarker(results[i]);
            }
        }
    }*/
    


// **************** End Google Map *****************
 
 function setCountry(countryName){
     // This function highlights the country thumbnail
    
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
function addtoWishList(){
    alert("this is under construction now ");
}

function fetchSearchResults(place){
    
    //$.when(
       // $.getJSON(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY`);}
    // .then{}
    
    $("#GallerySearchResults").html(`<div class = "row">
        <span class="col-md-8">
            Name : ${place.name} &nbsp; | &nbsp; Address:${place.formatted_address} <br> Business Status: ${place.business_status}
           <br> <img src="" alt="thumbnail image of gallery">
        </span>
        <span class="col-md-4">
            <button type="button" name="myWish" id="myWish" onclick="addtoWishList()" ><i class="fas fa-heart wishlist"></i></button>
           
        </span></div>
    `);
}

