

function fetchfromWishList(){
    var myWishlist = JSON.parse(localStorage.getItem("WishList"));   
    for (let i=0; i < myWishlist.length ; i++){
        var newRow = document.createElement("div");
        newRow.className = "row-position";
        newRow.classList.add = "row";
        newRow.classList.add = "no-gutters";
        var divId = "div" + i;
        newRow.setAttribute("id", divId);
        newRow.innerHTML = parseWishlist(myWishlist[i],i);
        document.getElementById("WishlistDisplay").appendChild(newRow);
    }
}

function parseWishlist(wish, i){
    var htmlOfPlaces = "";
            var country = wish[0];
            var objPlaces = wish[1][0];
            for (let place in objPlaces)
            {
                htmlOfPlaces += ( objPlaces[place] + "&nbsp; | &nbsp;");
            }
                 htmlOfPlaces += "<span class='icon-position'><a onclick='deleteFromWishList(" + i + ")'><i class='far fa-trash-alt'></i></a></span>"
    return  "<b>" + country + "</b>&nbsp; - &nbsp;" + htmlOfPlaces ;
}

function deleteFromWishList(counter)
{
    var response = confirm("This record will be deleted, do you wish to continue? ");
    var myWishlist = JSON.parse(localStorage.getItem("WishList"));   
    if (response){
        myWishlist.splice(counter,1);
        var divId = "div" + counter;
        localStorage.setItem ("WishList", JSON.stringify(myWishlist));
        
        var element = document.getElementById(divId);
        element.parentNode.removeChild(element);
    // }else{
    //     alert("Not removed!");
    // }
    }
}

function sendMail(){
    document.getElementById("loader").style.display = "inline-block";
   var myList = JSON.parse(localStorage.getItem("WishList"));
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
                document.getElementById("loader").style.display = "none";
                document.getElementById("message").innerHTML = "Email Sent Successfully!";
                // + ": " + response.status + ", " + response.text;
            }, function(error) {
                document.getElementById("loader").style.display = "none";
                document.getElementById("message").innerHTML = "Email sending FAILED..." + error;
                window.location.replace("../../Error.html");
            });
   })();
}

function parseMyList(list){
    var htmlString = "<br><table id='emailTable'><tr><th>Country</th><th>Place</th><th>Address</th><th>Status</th></tr>" //</th></thead></table>"
    
    for (let i = 0; i < list.length ; i++){
        htmlString += "<tr><td style='padding: 10px'>" + list[i][0] + "</td>";
    
        var objPlaces = list[i][1][0];
        for (let place in objPlaces){
            htmlString += ( "<td style='padding: 6px'>" + objPlaces[place] + "</td>" ); 
        }
         htmlString += "</tr>";
    }
    htmlString += "</table><br>";

    return htmlString;
}
