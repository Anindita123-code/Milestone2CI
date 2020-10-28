
/*const locations = [finland, [{
                                name: "some name", 
                                coords: {lng: 2.34, lat: 234.3434}, 
                                description: "description of item", 
                                address: "Address Line 1, Line 2"
                            },
                            {
                                name: "other name", 
                                coords: {lng: 2.34, lat: 234.3434}, 
                                description: "description of item", 
                                address: "Address Line 1, Line 2"
                            }],
                [denmark,   [{
                                name: "other name", 
                                coords: {lng: 2.34, lat: 234.3434}, 
                                description: "description of item", 
                                address: "Address Line 1, Line 2"
                            },
                            {
                                name: "other name", 
                                coords: {lng: 2.34, lat: 234.3434}, 
                                description: "description of item", 
                                address: "Address Line 1, Line 2"
                            }]
                        ]];
*/

function fetchfromWishList(){
   // alert("fetch from Wishlist");
    //console.log(localStorage.getItem("WishList"));
    var myWishlist = JSON.parse(localStorage.getItem("WishList"));   
    console.log("elements in wishlist #" + myWishlist.length);
    //alert(myWishlist.length);
    for (let i=0; i < myWishlist.length ; i++){
        var newRow = document.createElement("div");
        newRow.className = "row-position";
        newRow.classList.add = "row";
        newRow.classList.add = "no-gutters";
        var divId = "div" + i;
        newRow.setAttribute("id", divId);
        newRow.innerHTML = parseWishlist(myWishlist[i],i);
        console.log(newRow);
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
        console.log(divId);
        localStorage.setItem ("WishList", JSON.stringify(myWishlist));
        
        var element = document.getElementById(divId);
        element.parentNode.removeChild(element);

        console.log("removed ##" + element);
    }else{
        alert("Not removed!");
    }

}
