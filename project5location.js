function Location(){
	this.name;
	this.locationName = name;
	this.locationId = 0;
	this.description = text;
	this.directionWest = false;
	this.directionEast = false;
	this.directionSouth = false;
	this.directionNorth = false;
	this.points = 5;
	this.print = function (){
		document.getElementById("taMain").innerHTML = this.description;
	}
	this.item = item;
}

var locCircus = new Location("Circus of Horrors", 2, "A large red and white striped, tent-like building. 'Circus of Horrors.' Oh God. This is the LAST place you wanted to be. Coulrophobia is NOT for the faint of heart. Does that say 'Side Show', too??", true);
var locInsect = new Location ();
var locMansion = new Location ();
var locZoo = new Location ();
var locChildren = new Location ();
var locConcessions = new Location ();
var locStadium = new Location ();
var locWaters = new Location ();
var locCoaster = new Location ();
var locMaze = new Location ();
var locAquarium = new Location ();
var locTown = new Location ();

function Item(){
	this.itemName = item;
	this.itemId = 1;
	this.itemText = text;
}

var itemKey = new Item();
var itemCard = new Item();
var itemNotebook = new Item();
var itemRope = new Item();

