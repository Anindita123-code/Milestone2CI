

function fetchfromWishList(){
   // alert("fetch from Wishlist");
    //console.log(localStorage.getItem("WishList"));
    var myWishlist = JSON.parse(localStorage.getItem("WishList"));   
   // console.log("elements in wishlist #" + myWishlist.length);
    //alert(myWishlist.length);
    for (let i=0; i < myWishlist.length ; i++){
        var newRow = document.createElement("div");
        newRow.className = "row-position";
        newRow.classList.add = "row";
        newRow.classList.add = "no-gutters";
        var divId = "div" + i;
        newRow.setAttribute("id", divId);
        newRow.innerHTML = parseWishlist(myWishlist[i],i);
        //console.log(newRow);
        document.getElementById("WishlistDisplay").appendChild(newRow);
    }
}

function parseWishlist(wish, i){
    //console.log(wish);
    var htmlOfPlaces = "";
            var country = wish[0];
            var objPlaces = wish[1][0];
            
            for (let place in objPlaces)
            {
                
                //console.log(objPlaces[place]);
                htmlOfPlaces += ( objPlaces[place] + "&nbsp; | &nbsp;");
        
            }
                 htmlOfPlaces += "<span class='icon-position'><a onclick='deleteFromWishList(" + i + ")'><i class='far fa-trash-alt'></i></a></span>"
    return  "<b>" + country + "</b>&nbsp; - &nbsp;" + htmlOfPlaces ;
    //console.log(country);
    //console.log(htmlOfPlaces);
}

function deleteFromWishList(counter)
{
    var response = confirm("This record will be deleted, do you wish to continue? ");
    var myWishlist = JSON.parse(localStorage.getItem("WishList"));   
    if (response){
        // console.log(counter);
        // console.log(myWishlist);
        myWishlist.splice(counter,1);
        //console.log(myWishlist);
        var divId = "div" + counter;
        //console.log(divId);
        localStorage.setItem ("WishList", JSON.stringify(myWishlist));
        
        var element = document.getElementById(divId);
        element.parentNode.removeChild(element);

 //       console.log("removed ##" + element);
    }else{
        alert("Not removed!");
    }

}

function sendMail(){
   var myList = JSON.parse(localStorage.getItem("WishList"));
   //console.log(document.getElementById("email").value);
   (function(){
        emailjs.init("user_9tv1BSdrIPXy39aw6nHuB");
        
        var templateParams = {
            from_name: "Nordic Art Gallery Search",
            from_email: "Arts & More",
            to_name: "Guest",
            Galleries_wishlist: parseMyList(myList),
            to_email: document.getElementById("email").value
        }
        emailjs.send('gallerySearch', 'wishlist', templateParams)
            .then(function(response) {
            alert('SUCCESS!'+ ": " + response.status + ", " + response.text);
            }, function(error) {
            alert('FAILED...' + error);
            });
   })();
}

function parseMyList(list){
//    console.log(list + " ####" + list.length);
    

    var htmlString = "<br><table id='emailTable'><tr><th>Country</th><th>Place</th><th>Address</th><th>Status</th></tr>" //</th></thead></table>"
    
    
    for (let i = 0; i < list.length ; i++){
        htmlString += "<tr><td style='padding: 10px'>" + list[i][0] + "</td>";
    
        var objPlaces = list[i][1][0];
        //console.log(objPlaces);
        for (let place in objPlaces){
           // ( objPlaces[place] + "&nbsp; | &nbsp;");
            htmlString += ( "<td style='padding: 6px'>" + objPlaces[place] + "</td>" ); 
        }
         htmlString += "</tr>";
    }
    htmlString += "</table><br>";
   // console.log (htmlString); 

    return htmlString;
}