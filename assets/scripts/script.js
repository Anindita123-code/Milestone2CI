
//******************************
//******Global Variables



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

//************************************************ */
// Google Maps Coding
//*************** Global Variables *************** */

//const ApiKey = "AIzaSyCeetcMkyfLKX-96r4V__MikIyrXS17Hjw";
const norwayLat = 59.906932;
const norwayLng = 10.721243;
const swedenLat = 57.522434;
const swedenLng = 14.775575;
const denmarkLat = 56.291470;
const denmarkLng = 10.591553;
const greenlandLat = 68.702821;
const greenlandLng = -40.658112;
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

//Global Variable for Add to Wishlist
//var myWishlist = [];

if (searchCountry === null || searchCountry === "null"){
    document.getElementById("selected_country").innerText = "None";
    //setCountry("Aland");
}
else{
    document.getElementById("selected_country").innerText = " : " + searchCountry;
    setCountry(searchCountry); // highlights the country thumbnail
}

function initMap() {
    infowindow = new google.maps.InfoWindow();
    switch(searchCountry){
        case 'Aland'://Åland
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
        zoom: 5,
        center: country
    });    

    //console.log(map);
    //business_status, formatted_address, geometry, icon,name, 
    // permanently_closed (deprecated), photos, place_id, plus_code, types
   
    var request = {
        location: country,
        radius: '5000',
    
        query: searchCountry + ' art gallery + museum',
        fields: ["place_id", "name", "geometry", "formatted_address", "business_status", "photos"],
    };
    
    var service = new google.maps.places.PlacesService(map);
    if(searchCountry != null || searchCountry != "null"){ 
        service.textSearch(request, callback);
    }
}

function callback(results, status) {
    console.log(status);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i],i);
                if(i>=0){ // create multiple rows
                    var newRow = document.createElement("div");
                    newRow.classList.add = "row";
                    newRow.classList.add = "search-result";
                    
                    newRow.innerHTML = fetchSearchResults(place);
                
                    document.getElementById("List_Gallery").appendChild(newRow);
                }
            }
        }
}
function fetchSearchResults(place){
    var htmlString = '<span class="col-md-8"><b>Name : '+place.name+ 
                '</b><br>'+place.formatted_address+
                '<br>'+place.business_status+
                '<br><br></span><span class="col-md-4"><button type="button" name="myWish" id="myWish" ';
    //console.log(searchCountry);
    var onclick_querystring = `onclick="addtoWishList('${searchCountry}','${place.name}', '${place.formatted_address}','${place.business_status}')" ><i class="fas fa-heart wishlist"></i></button></span>`;
    //console.log(onclick_querystring);
    return htmlString + onclick_querystring;
}

function createMarker(place,i) {

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
   // console.log(place); 
    const marker = new google.maps.Marker({map, //photos[0].getUrl({maxWidth: 35, maxHeight: 35})
        position: place.geometry.location,
        label: labels[i % labels.length]
    });
    
    // google.maps.event.addListener(marker, "click", () => {
        //infowindow.setContent(place.name);
        //infowindow.open(map);
//   });
}

// **************** End Google Map **********************

// **************** Scripts related to Wishlist *********
function addtoWishList(country, name, address, status){
    //alert(JSON.parse(localStorage.getItem("WishList")));
    var myWishlist = [];
   
        if(JSON.parse(localStorage.getItem("WishList")) != null){
            //console.log(">0");
            myWishlist = JSON.parse(localStorage.getItem("WishList"));
            console.log(myWishlist);
            myWishlist.push([country, [{ g_name: name, g_address: address, g_status: status}]]);
        }else{
            //console.log("zero records");
            myWishlist.push([country, [{ g_name: name, g_address: address, g_status: status}]]);
        }
        localStorage.setItem ("WishList", JSON.stringify(myWishlist));
        console.log(myWishlist);
              
} 

function clearWishList(){
    localStorage.clear();
    alert("wishlist is cleared now!");
}






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



