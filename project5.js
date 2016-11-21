		
		var score = 0;
		var currentLoc = 0;
		
		//variables for score keeping & items
		var scoreMaze = 0;
		var scoreCoaster = 0;
		var scoreMansion = 0;
		var scoreInfestation = 0;
		var scoreConcessions = 0;
		var scoreCircus = 0;
		var scoreChildren = 0;
		var scoreStadium = 0;
		var scoreZoo = 0;
		var scoreWater = 0;
		var scoreWest = 0;
		var scoreAquarium = 0;
		var bag = [];
		var item = 0;
				
		//variable for navigation textbox
		var dir = 0;
		
		//Sets initial display text through use of updateDisplay function & current location
		function initialDisplay(){
		document.getElementById("main").innerHTML = "A new amusement park, Horrorland, has come to your town. The advertisements describe it as a 'gory, terror-filled fright fest'. Everyone you know has received a free, late-night, 'Exclusive Preview' invitation prior to the grand opening. All your friends can't wait!!! Secretly, though, the place SERIOUSLY creeps you out. You find some excuse to not go, and you wind up being pretty much the only one. The next day, people are raving about how scary/fun it is. You HAVE to go they say. However, in the days afterward, your best friend Sam has gone missing. Everyone has a theory, but only YOU KNOW it was that place. It's up to you to investigate, so, tonight, you're going to find Sam. Click North to jump the fence & enter the park.";
		buttonDisable();
		}

		//Sets naviation error message
		function navigationError(){
		document.getElementById("main").innerHTML = "Don't freak out! You can't go that way. You're at the edge of the park!";
		}
	
		//Score function
		//Totals scores together (only once per location)
		function changeScore(){
		score = scoreMaze + scoreCoaster + scoreMansion + scoreInfestation + scoreConcessions + scoreCircus + scoreChildren + scoreStadium + scoreZoo + scoreWater + scoreWest +scoreAquarium
		document.getElementById("scoreSpot").innerHTML = "Score: " + score;
		}
		
		//Display function
		//Updates the display each time a site is visited
		//Assigns each location a score value
		//If a location has an item, lists item
		function updateDisplay(){
			var message = "";
			var item = "";
			switch (currentLoc){
			case 1: message = mansion.desc;
				scoreMansion = 5;
				item = key.desc;
				break;
			case 2: message = circus.desc;
				document.getElementById("take").disabled = false;
				scoreCircus = 5;
				item = note.desc;
				break;
			case 3: message = children.desc;
				document.getElementById("take").disabled = true;
				scoreChildren = 5;
				item = blank.desc;
				break;
			case 4: message = zoo.desc;
				item = "card";
				document.getElementById("take").disabled = false;
				scoreZoo = 5;
				break;
			case 1001: message = insect.desc;
				item = key
				document.getElementById("take").disabled = true;
				scoreInfestation = 5;
				break;
			case 1002: message = concessions.desc;
				document.getElementById("take").disabled = true;
				scoreConcessions = 5;
				break;
			case 1003: message = stadium.desc;
				document.getElementById("take").disabled = true;
				scoreStadium = 5;
				break;
			case 1004: message = waters.desc;
				document.getElementById("take").disabled = true;
				scoreWater = 5;
				break;
			case 2001: message = coaster.desc;
				document.getElementById("take").disabled = true;
				scoreCoaster = 5;
				break;
			case 2002: message = maze.desc;
				document.getElementById("take").disabled = true;
				scoreMaze = 5;
				break;
			case 2003: message = aquarium.desc;
				document.getElementById("take").disabled = true;
				scoreAquarium = 5;
				break;
			case 2004: message = town.desc;
				document.getElementById("take").disabled = true;
				scoreWest = 5;
				break;
			default: message = "Try the opposite direction.";
				document.getElementById("take").disabled = true;
			}
			document.getElementById("main").innerHTML = message;
			document.getElementById("items").innerHTML = item;
		}
			
		//Excel file in GitHub indicates the locations
		//Runs score code and disables buttons at the end of each move
		
		//North
		function buttonNorth(){
			currentLoc = currentLoc + 1;
		changeScore();
		buttonDisable();
		updateDisplay ();
		}
		//South
		function buttonSouth(){
				currentLoc = currentLoc - 1;
		changeScore();
		buttonDisable();
		updateDisplay();
		}			
		
		//East
		function buttonEast(){
			currentLoc = currentLoc + 1000;
		changeScore();
		buttonDisable();
		updateDisplay();
		}		
		
		//West
		function buttonWest(){
			currentLoc = currentLoc -1000;
		changeScore();
		buttonDisable();
		updateDisplay();
		}
		
		//Disables buttons that are not applicable based on current location
		function buttonDisable(){
		switch (currentLoc){
		//South off
		case 1001: document.getElementById("btnN").disabled = false;
				document.getElementById("btnS").disabled = true;
				document.getElementById("btnE").disabled = false; 
				document.getElementById("btnW").disabled = false;			
			break;
		//South West off
		case 1: document.getElementById("btnN").disabled = false; 
				document.getElementById("btnS").disabled = true;
				document.getElementById("btnE").disabled = false;
				document.getElementById("btnW").disabled = true;	
			break;
		//West off
		case 2:
		case 3: document.getElementById("btnN").disabled = false;
				document.getElementById("btnS").disabled = false;
				document.getElementById("btnE").disabled = false;
				document.getElementById("btnW").disabled = true;	
			break;
		//South East off
		case 2001: document.getElementById("btnN").disabled = false;
				document.getElementById("btnS").disabled = true;
				document.getElementById("btnE").disabled = true;
				document.getElementById("btnW").disabled = false;	
			break;
		//North West off
		case 4: document.getElementById("btnN").disabled = true;
				document.getElementById("btnS").disabled = false;
				document.getElementById("btnE").disabled = false;
				document.getElementById("btnW").disabled = true;
			break;
		//North off
		case 1004: document.getElementById("btnN").disabled = true;
				document.getElementById("btnS").disabled = false;
				document.getElementById("btnE").disabled = false;
				document.getElementById("btnW").disabled = false;
			break;
		//East off
		case 2003:
		case 2002: document.getElementById("btnN").disabled = false;
				document.getElementById("btnS").disabled = false;
				document.getElementById("btnE").disabled = true;
				document.getElementById("btnW").disabled = false;
			break;
		//North East off
		case 2004: document.getElementById("btnN").disabled = true;
				document.getElementById("btnS").disabled = false;
				document.getElementById("btnE").disabled = true;
				document.getElementById("btnW").disabled = false;
			break;
		//East West South off
		case 0: document.getElementById("btnN").disabled = false;
				document.getElementById("btnS").disabled = true;
				document.getElementById("btnE").disabled = true;
				document.getElementById("btnW").disabled = true;
			break;
		default: document.getElementById("btnN").disabled = false;
				document.getElementById("btnS").disabled = false;
				document.getElementById("btnE").disabled = false;
				document.getElementById("btnW").disabled = false;
				}
		}
		//Returns an error message if user enters text that is not NSEW
		function wrongDir(){
		document.getElementById("navError").innerHTML = "Oops! Try that again. N, S, E, or W."
		}
		
		
		//Changes data entered into all lowercase
		//Launches appropriate button function based on NSEW text entered
		function buttonGo(){
		dir = document.getElementById("box").value;
		dir = dir.toLowerCase();
		document.getElementById("navError").innerHTML = " ";
		switch(dir){
		case "n": 
		case "north": buttonNorth();
			break;
		case "w":
		case "west": buttonWest();
			break;
		case "e": 
		case "east": buttonEast();
			break;
		case "s":
		case "south": buttonSouth();
			break;
		case "take":
		case "t": takeItem();
			break;
		case "drop":
		case "d": dropItem();
			break;
		default: wrongDir();
		}		
		}
		
		//Help button
		function helpMe(){
			document.getElementById("help").innerHTML = "Need some help? To move, click the buttons for North, South, East, or West. If you cannot go in one direction, the button will not be active. If you prefer to type, type N, S, E, W or North, South, East, or West. (Capitalization is not important.) If, in your investigation, you see an item and want to pick up or 'take' it, click the button to 'Take Item' or type in 'take' in the input box. REMEMBER, Sam needs you...";
		}
				
function Location(locName, locId, locDesc, locPoints){
	this.loc = locName;
	this.id = locId;
	this.desc = locDesc;
	this.points = locPoints;
}

var circus = new Location("Circus of Horrors", 2, "A large red and white striped, tent-like building. 'Circus of Horrors.' Oh God. This is the LAST place you wanted to be. Coulrophobia is NOT for the faint of heart. Does that say 'Side Show', too??", 5);
	
var insect = new Location ("Insect Infestation", 1001, "The Insect Infestation attraction is part zoo/part 'hands on experience' that is quote 'intended to education as well as terrify' unquote. You did NOT want to know what they meant by that.",5);
	
var mansion = new Location ("Haunted Mansion", 1, "Like a demented Disney castle, the centerpiece of the park is the Haunted Mansion. Modeled after the Winchester Mystery House, it's supposedly filled with weird rooms, dead ends, and strange entertainments. Hopefully, everyone has gone home...",5);
	
var zoo = new Location ("Zombie Zoo", 4, "Part zoo, part drive-thru safari, all terrifying. Even now you can hear the sounds of animals. Sounds you don't recognize. But Sam LOVED animals, so you have to look here. As you approach the hideous gate, made to look like a way too realistic alligator gone undead, you notice a key card wedged between two of the teeth. For a cement 'gate', those teeth look awfully sharp...",5);
	
var children = new Location ("Children's Dreams", 3, "A playground. Of sorts. The rides are like traditional kids rides, but....off.",5);
	
var concessions = new Location ("Creepy Concessions", 1002, "This place doesn't look that bad. Yeah, it says 'Creepy Confections,' but how bad can a few restaurants be?",5);

var stadium = new Location ("Severed Stadium", 1003, "It says 'stadium' but it looks more like the Roman Colliseum. How bizarre! Then you remember some of the 'attractions' the Colliseum used to present...",5);
	
var waters = new Location ("Wicked Waters", 1004, "A water park. Simple enough. But why is the water so cloudy? And how would anyone survive that drop??",5);

var coaster = new Location ("Death by Coaster", 2001, "Sneaking quietly along the walkway, the monstrous roller coaster comes into view. Already voted 'Most terrifying ride in the world', the ride twists and turns through the night sky like a snake. 'Death by Coaster.' That HAS to be an exaggeration...right?",5);
	
var maze = new Location ("Misery Maze", 2002, "Taking off of the thousands of corn mazes that arise during the Halloween season, the creators of the Mind-bending Maze bragged about using illusions and homeopathic substances to confuse and disorient people. Luckily, they turn that stuff off at night...",5);
	
var aquarium = new Location ("Creatures from the Deep", 2003, "An insanely large aquarium, this attraction, too, has made headlines. But, honestly, a shark is a shark, right?",5);
	
var town = new Location ("Ghost Town", 2004, "This appears to be modeled after those old Wild West shows of yore. Shoot outs at noon. Saloons. That's what your friends reported at least.",5);

var locArray = [];

	
function Item(itemId, desc){
	this.itemId = itemId;
	this.desc = desc;
	this.take = function (){
		this.desc.push(bagHolding);
		document.getElementById("item").innerHTML = ("You have picked up the " + this.desc)
		this.desc.push
	}
	this.drop = function (){
		this.desc.pop(bagHolding);
		document.getElementById("item").innerHTML = ("You have dropped up the " + this.desc)
	}
}

var key = new Item(1,"You see a glimmer on the ground. It's a key.");
	
var card = new Item(2,"Ooo, someone must have dropped their badge.");
	
var note = new Item(3,"What's that? It's a piece of paper wedged behind the picture.");
	
var rope = new Item(4,"A length of rope is laying by the side of the building.");

var bagHolding = [];

/*function takeItem(){
	items.push(bagHolding);
	x = 
	document.getElementById("item").innerHTML = "You have picked up the " + x.desc)
}

function dropItem(){
	items.pop(x);
}
*/
//	this.west = dirWest;
//	this.east = dirEast;
//	this.south = dirSouth;
//	this.north = dirNorth;
/*
		Add item to bag and list on page
			document.getElementById("bag").innerHTML = bag;
			document.getElementById("take").disabled = true;	
		}*/