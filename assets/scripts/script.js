
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

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
//************** End Carousel Script */


 function setCountry(countryName){
     // This function highlights the country thumbnail
    
    let country = document.getElementById(countryName);
    if (country != null) {
        let anchorElement = country.childNodes;
        for(var i=0; i<anchorElement.length; i++){
            if(i==1){ // targeting the img tag in the anchors
                anchorElement[1].style.borderStyle='solid'; 
                anchorElement[1].style.borderWidth='5px'; 
            }
        }   
    }
}

function searchByCountry(countryName){
    sessionStorage.setItem("searchCountry", countryName);
    document.querySelector("form").submit;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        location.reload();
    }
}

function clearSession()
{
    sessionStorage.removeItem("searchCountry");
    sessionStorage.clear;
}

// **************** Scripts related to Wishlist *********
function addtoWishList(btnIndex, country, name, address, status){
    var myWishlist = [];
   
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
            // else{
            //    // alert("not pushed");
            // }
        }else{
            myWishlist.push([country, [{ g_name: name, g_address: address, g_status: status}]]);
        }
        localStorage.setItem ("WishList", JSON.stringify(myWishlist));
        
        document.getElementById("btn"+btnIndex).innerHTML = '<i class="far fa-heart wishlist-color"></i>';
              
} 

function clearWishList(){
    localStorage.clear();
    showAlert("Wishlist is Empty!");
}

function showAlert(text){
    document.getElementById("message").innerHTML = '<i class="fa fa-info-circle info-style" aria-hidden="true"></i> ' + text + "<br>";
}


