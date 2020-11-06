
//********************************** */
 // Function to highlight the country thumbnail
 //********************************* */   
 function setCountry(countryName){
    let country = document.getElementById(countryName);
    if (country != null) {
        let anchorElement = country.childNodes;
        for(var i=0; i<anchorElement.length; i++){
            if(i==1){ 
                // targeting the img tag in the anchors
                anchorElement[1].style.borderStyle='solid'; 
                anchorElement[1].style.borderWidth='5px'; 
            }
        }   
    }
}

//******************************************** */
// Function to Store the new country name in the session variable and refresh the page if using a smaller screen display
//******************************************** */
function searchByCountry(countryName){
    sessionStorage.setItem("searchCountry", countryName);
    document.querySelector("form").submit;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        location.reload();
    }
}

//******************************************** */
// Function to Clear the session variables
//******************************************** */
function clearSession() {
    sessionStorage.removeItem("searchCountry");
    sessionStorage.clear;
}

//********************************************* */
// Function to Get the wishlist item from localstorage and create a local array, also check for duplicate items and branch accordingly
//********************************************* */
function addtoWishList(btnIndex, country, name, address, status){
    let myWishlist = [];
        if(JSON.parse(localStorage.getItem("WishList")) != null){
            myWishlist = JSON.parse(localStorage.getItem("WishList"));
            let isMatching = false;
            for (let i=0; i<myWishlist.length;i++){
                if(myWishlist[i][0] === country && myWishlist[i][1][0]['g_name'] === name ){
                    isMatching = true
                }  
            }
            if (isMatching === false){
                myWishlist.push([country, [{ g_name: name, g_address: address, g_status: status}]]);
            }
        }else {
            myWishlist.push([country, [{ g_name: name, g_address: address, g_status: status}]]);
        }
        localStorage.setItem ("WishList", JSON.stringify(myWishlist));
        
        document.getElementById("btn"+btnIndex).innerHTML = '<i class="far fa-heart wishlist-color"></i>';
} 

//************************************** */
// Function to Display message on "Clear Wishlist" and clear the wishlist from localstorage
//************************************** */
function clearWishList(){
    localStorage.clear();
    showAlert("Wishlist is Empty!");
}

//*************************************** */
// Function to Show message in the message div for successfully clearing wishlist
//*************************************** */
function showAlert(text){
    document.getElementById("message").innerHTML = '<i class="fa fa-info-circle info-style" aria-hidden="true"></i> ' + text + "<br>";
}

//*************************************** */
// Function to Create the dynamic div for displaying the wishlist
//*************************************** */ 
function fetchfromWishList(){
    let myWishlist = JSON.parse(localStorage.getItem("WishList"));
    for (let i=0; i < myWishlist.length ; i++){
        let newRow = document.createElement("div");
        newRow.className = "row-position";
        newRow.classList.add = "row";
        newRow.classList.add = "no-gutters";
        let divId = "div" + i;
        newRow.setAttribute("id", divId);
        newRow.innerHTML = parseWishlist(myWishlist[i],i);
        document.getElementById("WishlistDisplay").appendChild(newRow);
    }
}
//************************************ */
// Function to get the values for the wishlist
//*********************************** */
function parseWishlist(wish, i){
    let htmlOfPlaces = "";
    let country;
    switch (wish[0]) {
        case "Aland" :
            country = "Åland";
            break;
        case "Faroe" :
            country = "Faroe Island";
            break;
        default:
            country = wish[0];
    }
            
    let objPlaces = wish[1][0];
    for (let place in objPlaces)
    {
        htmlOfPlaces += ( objPlaces[place] + "&nbsp; | &nbsp;");
    }
    htmlOfPlaces += "<span class='icon-position'><a onclick='deleteFromWishList(" + i + ")'><i class='far fa-trash-alt'></i></a></span>"
    return  "<b>" + country + "</b>&nbsp; - &nbsp;" + htmlOfPlaces ;
}
//************************************** */
// Function to Delete individual item from the wishlist in myWishlist page
//************************************** */
function deleteFromWishList(counter) {
    let response = confirm("This record will be deleted, do you wish to continue? ");
    let myWishlist = JSON.parse(localStorage.getItem("WishList"));   
    if (response){
        myWishlist.splice(counter,1);
        let divId = "div" + counter;
        localStorage.setItem ("WishList", JSON.stringify(myWishlist));
        
        let element = document.getElementById(divId);
        element.parentNode.removeChild(element);
    }
}
//************************************ */
// Function to set the templateParams for sending email using EmailJS API
//************************************ */
function sendMail(){
    document.getElementById("loader").style.display = "inline-block";
    let myList = JSON.parse(localStorage.getItem("WishList"));
    (function(){
        emailjs.init("user_9tv1BSdrIPXy39aw6nHuB");
        let templateParams = {
            from_name: "Nordic Art Gallery Search",
            from_email: "Arts & More",
            to_name: "Guest",
            Galleries_wishlist: parseMyList(myList),
            to_email: document.getElementById("email").value
        }
        sendEMail(templateParams);
   })();
}

//************************************** */
// Function for sending email and checking for any error conditions
//************************************** */

var sendEMail = function (parameters) {
   emailjs.send('gallerySearch', 'wishlist', parameters)
        .then(function(response) {
            document.getElementById("loader").style.display = "none";
            document.getElementById("message").innerHTML = "Email Sent Successfully!";
        }, function(error) {
            if (error.status != 412) {
                location.replace("../../Error.html");
            }else {
                document.getElementById("loader").style.display = "none";
                document.getElementById("message").innerHTML = "Email sending FAILED, Please try with a valid email-id";
            }
    });
};
//************************************* */
// Function to create email content using <table> HTML element
//************************************* */ 
function parseMyList(list){
    let htmlString = "<br><table id='emailTable' style='border: 1px solid'><tr  style = 'background-color:#AC3127; color:#FFFFFF'><th>Country</th><th>Place</th><th>Address</th><th>Status</th></tr>" //</th></thead></table>"
    for (let i = 0; i < list.length ; i++){
        if(i%2 == 0) {
            htmlString += "<tr style='background-color: #eeeeee'><td style='padding: 10px'>" + list[i][0] + "</td>";
        } else {
            htmlString += "<tr><td style='padding: 10px'>" + list[i][0] + "</td>";
        }
        let objPlaces = list[i][1][0];
        for (let place in objPlaces){
            htmlString += ( "<td style='padding: 6px'>" + objPlaces[place] + "</td>" ); 
        }
         htmlString += "</tr>";
    }
    htmlString += "</table><br>";
    return htmlString;
}

