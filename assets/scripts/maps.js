//************************************************ */
// Google Maps Coding
//************************************************ */
/** Declare constants for latitude and longitude coordinates of the 7 Nordic Countries */
//************************************************ */
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

//************************************************ */
// Global Variable for countrySearch
//************************************************ */
var searchCountry = sessionStorage.getItem("searchCountry");
var map;
var infowindow;

//* Call function to show the current selection of country by the user */
showSelection()

//************************************************ */
// Function to Display the name of the selected Nordic country 
//************************************************ */
function showSelection(){
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
        //************************* */
        // function call to highlight the country's thumbnail
        //************************* */
        setCountry(searchCountry); 
    }
}

//************************************** */
//**** Display the Map with the query to fetch results */
//************************************** */
function initMap() {
    let country;
    infowindow = new google.maps.InfoWindow();
    switch(searchCountry){
        case 'Aland'://Åland
            country = new google.maps.LatLng(alandLat, alandLng);
            break;
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
        default:
            country = new google.maps.LatLng(59.559208, 11.244315);
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
    
    let service = new google.maps.places.PlacesService(map);
    
    if(searchCountry != null){ 
        service.textSearch(request, callback);
    }
}

//************************************* */
// Callback function for rendering Google Maps
//************************************* */
function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
            let place = results[i];
            createMarker(results[i],i);
            //***************************** */
            // if there are more than one results, then create multiple rows
            //***************************** */
            if(i>=0){ 
                let newRow = document.createElement("div");
                newRow.classList.add = "row";
                newRow.innerHTML = fetchSearchResults(place,i);
                document.getElementById("List_Gallery").appendChild(newRow);
            }
        }
    } else {
        location.replace("../../Error.html");
    }
}

//******************************** */
// Function to Create the location markers on map
//********************************* */
function createMarker(place,i) {
    let labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    const marker = new google.maps.Marker({map, //photos[0].getUrl({maxWidth: 35, maxHeight: 35})
        position: place.geometry.location,
        label: labels[i % labels.length]
    });
}

//********************************** */
// Function to Fetch the Search Results of Galleries / Museums on the left side of the map
//********************************** */
function fetchSearchResults(place, index){
    let formatted_address; 
    let name;
    if(place.formatted_address.indexOf("'")>-1){
        formatted_address = place.formatted_address.replace("'","~");
    }else {
        formatted_address = place.formatted_address;
    }
    if(place.name.indexOf("'")>-1){
        name = place.name.replace("'","~");
    }else {
        name = place.name;
    }
    if(place.business_status === null || place.business_status == 'undefined'){
        place.business_status = "";
    }
    let htmlString = '<div class="col-md-8 "><b>Name : '+place.name+ 
                '</b><br>'+place.formatted_address+
                '<br>'+place.business_status+
                '<br><br></div><div class="col-md-4"><button id = "btn'+index+'" class="wishlist"';
    let onclick_querystring = `onclick="addtoWishList('${index}','${searchCountry}','${name}', '${formatted_address}','${place.business_status}')" ><i class="fas fa-heart "></i><br></button></div>`;    
    return htmlString + onclick_querystring +"<br>";
}
//******************************************** */
// Function to Clear the session variables
//******************************************** */
function clearSession() {
    sessionStorage.removeItem("searchCountry");
    sessionStorage.clear;
}