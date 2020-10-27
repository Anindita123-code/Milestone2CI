
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
    alert(myWishlist.length);
    for (let i=0; i < myWishlist.length ; i++){
        var newRow = document.createElement("div");
        newRow.className = "row-position";
        newRow.classList.add = "row";
        newRow.classList.add = "no-gutters";
        
        newRow.innerHTML = parseWishlist(myWishlist[i]);
        console.log(newRow);
        document.getElementById("WishlistDisplay").appendChild(newRow);
    }
}

function parseWishlist(wish){
    //console.log(wish);
    var htmlOfPlaces = "";
            var country = wish[0];
            var objPlaces = wish[1][0];
            for (let place in objPlaces)
            {
                //console.log(objPlaces[place]);
                htmlOfPlaces += ( objPlaces[place] + "&nbsp; | &nbsp;");
            }
                 htmlOfPlaces += "<span class='icon-position'><a onclick='deleteFromWishList()'><i class='far fa-trash-alt'></i></a></span>"
    return  "<b>" + country + "</b>&nbsp; - &nbsp;" + htmlOfPlaces ;
    //console.log(country);
    //console.log(htmlOfPlaces);
}

function deleteFromWishList()
{
    var response = confirm("This record will be deleted, do you wish to continue? ");
    console.log(response);
}
