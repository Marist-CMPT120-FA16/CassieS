11-7-2016 code snippet
var off = x;

function westOff(x){
document.getElementById("btnW").disabled = x;
}
function eastOff(x){
document.getElementById("btnE").disabled = x;
}
function northOff(x){
document.getElementById("btnN").disabled = x;
}
function southOff(x){
document.getElementById("btnS").disabled = x;
}


function Location (){
this.locationName = name,
this.locationId = id,
this.west = westOff(false),
this.east = eastOff(false),
this.north = northOff(false),
this.south = southOff(false),
this.object = object,
this.description = "Enter description here",
}

function Item(){
this.itemID = itemId,
this.itemName = name,
this.itemDescription = description,
}

new 
