//************************************************ */
// Google Maps Coding
//************************************************ */

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

if (searchCountry === null || searchCountry === "null"){
    document.getElementById("selected_country").innerText = "- No Selection Made -";
    clearSession();
}
else{
    switch (searchCountry){
        case "Faroe" : document.getElementById("selected_country").innerText = " : Faroe Island";
            break;
        case "Aland" : document.getElementById("selected_country").innerText = " : Åland";
            break;
        default : document.getElementById("selected_country").innerText = " : " + searchCountry;
    }
}
if (searchCountry != null){
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
   
    var request = {
        location: country,
        radius: '5000',
    
        query: searchCountry + ' art gallery + museum',
        fields: ["place_id", "name", "geometry", "formatted_address", "business_status", "photos"],
    };
    
    var service = new google.maps.places.PlacesService(map);
    
    if(searchCountry != null){ 
        service.textSearch(request, callback);
    }
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            createMarker(results[i],i);
            if(i>=0){ // create multiple rows
                var newRow = document.createElement("div");
                newRow.classList.add = "row";
                newRow.innerHTML = fetchSearchResults(place,i);
            
                document.getElementById("List_Gallery").appendChild(newRow);
            }
        }
    }
}

function fetchSearchResults(place, index){
    var htmlString = '<span class="col-md-8 "><b>Name : '+place.name+ 
                '</b><br>'+place.formatted_address+
                '<br>'+place.business_status+
                '<br><br></span><div class="col-md-4"><button id = "btn'+index+'" class="wishlist"';
    var onclick_querystring = `onclick="addtoWishList('${index}','${searchCountry}','${place.name}', '${place.formatted_address}','${place.business_status}')" ><i class="fas fa-heart "></i><br></button></div>`;
    console.log(htmlString+onclick_querystring);
    return htmlString + onclick_querystring +"<br>";
}

function createMarker(place,i) {
    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    const marker = new google.maps.Marker({map, //photos[0].getUrl({maxWidth: 35, maxHeight: 35})
        position: place.geometry.location,
        label: labels[i % labels.length]
    });
}

// **************** End Google Map **********************
