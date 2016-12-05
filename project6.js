		var currentLoc = 0;
		var x=0;
		var name;
		var youTook="";
		var locError=1000;
		var locations;
		var locText;
		var locScoreText=" ";
		var locScore;
		var totalItemPoints=0;
//Name collect
function nameCollect(){
    var person = prompt("Please enter your name", "You");
    if (person != null) {
		name=person;
		}
}
//Location prototype	
function Location(locId, locDesc,score){
	this.id = locId;
	this.desc = locDesc;}
	//Location objects 
loc0 = new Location (0,"Haunted Mansion: Like a demented Disney castle, the centerpiece entrance of the park is the Haunted Mansion. Modeled after the Winchester Mystery House, it's supposedly filled with weird rooms, dead ends, and strange entertainments. But this is where you came in. How did you miss that?\n");
loc1 = new Location (1,"Wicked Waters: A water park. Simple enough. But why is the water so cloudy? And how would anyone survive that drop??\n");
loc2 = new Location (2,"Death by Coaster: Sneaking quietly along the walkway, the monstrous roller coaster comes into view. Already voted 'Most terrifying ride in the world', the ride twists and turns through the night sky like a snake. 'Death by Coaster.' That HAS to be an exaggeration...right?\n");
loc3 = new Location (3,"Circus of Horrors: A large red and white striped, tent-like building. 'Circus of Horrors.' Oh God. This is the LAST place you wanted to be. Coulrophobia is NOT for the faint of heart. Does that say 'Side Show', too??\n");
loc4 = new Location (4,"Creepy Confections: This place doesn't look that bad. Yeah, it says 'Creepy Confections,' but how bad can a few shops & restaurants be?\n");
loc5 = new Location (5,"Insect Infestation: The Insect Infestation attraction is part zoo/part 'hands on experience' that is quote 'intended to education as well as terrify' unquote. You did NOT want to know what they meant by that.\n");
loc6 = new Location (6,"Children's Dreams: A playground. Of sorts. The rides are like traditional kids rides, but....off.\n");
loc7 = new Location (7,"Severed Stadium: It says 'stadium' but it looks more like the Roman Colliseum. How bizarre! Then you remember some of the 'attractions' the Colliseum used to present...\n");
loc8 = new Location (8,"Creatures from the Deep: An insanely large aquarium, this attraction, too, has made headlines. But, honestly, a shark is a shark, right?\n");
loc8 = new Location (8,"Creatures from the Deep: An insanely large aquarium, this attraction, too, has made headlines. But, honestly, a shark is a shark, right?\n");
loc9 = new Location (9,"Zombie Zoo: Part zoo, part drive-thru safari, all terrifying. Even now you can hear the sounds of animals. Sounds you don't recognize. But Sam LOVED animals, so you have to look here. As you approach the hideous gate, made to look like a way too realistic alligator gone undead, you notice a key card wedged between two of the teeth. For a cement 'gate', those teeth look awfully sharp...\n");
//Location array
var locArr = [
/*0 Mansion*/loc0,
/*1 Waters*/loc1,
/*2 Coaster*/loc2,
/*3 Circus*/loc3,
/*4 Confections*/loc4, 
/*5 Insect*/loc5,
/*6 Children's*/loc6,
/*7 Stadium*/loc7,
/*8 Aquarium*/loc8,
/*9 Zoo*/loc9,
]
var locVisit = []
//Navigation variables
		var NORTH = 0;
		var SOUTH = 1;	 
		var EAST  = 2;
		var WEST  = 3;
//Navigation locations
		var nav = [ // N,S,E,W,
             /*Current Location*/ 
			 /*0 Mansion*/ [4,1000,2,1],
             /*1 Waters*/ [3,1000,0,1000],
			 /*2 Coaster*/ [5,1000,1000,0],
			 /*3 Circus*/ [6,1,4,1000],
			 /*4 Concessions*/ [7,0,5,3],
			 /*5 Insect*/ [8,2,1000,4],
			 /*6 Children's*/ [1000,3,7,1000],
			 /*7 Stadium*/ [9,4,8,6],
			 /*8 Aquarium*/ [1000,5,1000,7],
			 /*9 Zoo*/ [1000,7,1000,1000]
			 ];        
// Directional Button Event Handlers
		function btnEast_click() {nextLoc(EAST);}
		function btnWest_click() {nextLoc(WEST);}
		function btnNorth_click() {nextLoc(NORTH);}
		function btnSouth_click() {nextLoc(SOUTH);}
		function nextLoc(dir) {
			var newLoc = nav[currentLoc][dir];
			currentLoc=newLoc;
			locations=locArr[currentLoc];
			if (currentLoc==1000){//this didn't work right
				loseGame();
				buttonDisable();
				}
			else{
				var itemText;
				locText=locations.desc;
				firstVisit();
				buttonDisable();
				if (itemDesc[currentLoc]!=0){
					itemText=itemDesc[currentLoc];
					displayMessage(locText+"You search, but can't find any clue about Sam.\n\n"+itemText);
					totalGamePoints();
				}
				else{
					displayMessage(locText+"You search, but can't find any clue about Sam.\n\n");
					totalGamePoints();
					}
					}
					}
//Items Objects
function Item(itemId,itemDesc){
	this.id = itemId;
	this.desc = itemDesc;}
//Individual Items
key = new Item ("the key","As you start to head towards the mouth, um, gate?, of the zoo, you step on something hard. It's a key. The handle is shaped like a femur.\n\n\n");
rope = new Item ("the rope","To the left, a loose length of rope dangles from one of the bleachers.\n\n\n");
card = new Item ("the ID card","You walk by the bushes towards the door. Something glintss in the moonlight. It's an ID card!!!\n\n\n");
notebook = new Item ("Sam's notebook","What's that? You see the corner of something sticking out of the corner near the shark tank. It's a notebook. It's SAM'S notebook!!\n\n\n");
//Location Item Array
var itemDesc = [
/*0 Mansion*/0,
/*1 Waters*/0,
/*2 Coaster*/card.desc,
/*3 Circus*/rope.desc,
/*4 Confections*/0, 
/*5 Insect*/0,
/*6 Children's*/0,
/*7 Stadium*/0,
/*8 Aquarium*/notebook.desc,
/*9 Zoo*/key.desc,
]
var itemArr =[
/*0 Mansion*/0,
/*1 Waters*/0,
/*2 Coaster*/card.id,
/*3 Circus*/rope.id,
/*4 Confections*/0, 
/*5 Insect*/0,
/*6 Children's*/0,
/*7 Stadium*/0,
/*8 Aquarium*/notebook.id,
/*9 Zoo*/key.id,
]
//Bag of Holding
var itemBag=["a backpack","a flashlight"]
function btnInventory(){
	var bagContents = itemBag.toString();
	var bagPrint = "You've brought or found: " + bagContents;
    displayMessage(bagPrint);
}
//take button
function btnTake(){
	var item = itemArr[currentLoc];
	if (item!=0){
			youTook = ("You've pick up the " + item + " and put it in your backpack.");
			itemBag.push(item);
			var itemRemove=itemDesc.splice(currentLoc,1,0);
			var itemDescReplace=itemDesc.splice(currentLoc,1,0);
			var itemArrReplace=itemArr.splice(currentLoc,1,0);
			totalItemPoints = 54 + totalItemPoints;
			displayMessage(youTook +" You've earned 100 points");
			}
			else{
			youTook=("There is nothing to take here. Keep looking.");}
	totalGamePoints();
	winGame();
	}
// Utility Function(s)
		function displayMessage(msg) {
            var target = document.getElementById("taMain");
            target.value = msg + "\n\n" + target.value;
         }
//FAKE win function
	function winGame(){
		if (itemBag.length==6){
		displayMessage("Crap! As you go to put it in the bag, the notebook falls to the ground. You reach down to pick it up. Suddenly, you register what you're reading. In frantically drawn text, it says 'HELP! I'M TRAPPED BEHIND THE WATERFALL!!!' \n\nSomeone - or something? - must have dropped it...after...You don't want to think about what's happened to Sam. You run to the Wicked Waters display and carefully try to get behind the waterfall. \n\nIt's impossible! No, wait, you have an idea. Using the rope, you lower yourself from the top of the waterfall. Behind it, you see a cage. THERE'S SAM!! You unlock the cage and grab Sam, who, semi-conscious, is able to stumble along with your help. \n\nHow to get out of here?? There's a door in the back! Using the ID card, you are able to scan it and open the door. You run to the nearest exit! \n\nOMG YOU MADE IT!!! Once you're clear of the park - AND SAFE!! - you set Sam on the ground.\n\n'SAM!! SAM!! WAKE UP!'\n\n'"+name+"? Is that you?'\n\n'Yeah, are you okay?'\n\n'I'm fantassssttiiiiccc' \n\nSam's voice completely changes...and looks up at you. Staring back  is a hideously disgusting caricature of what was once your best friend. Not Sam. Not human. Not...natural. As the creature lunges, you see a sign in the distance and realize, \n\n'We're still in the park...'")
		}
	}
//Location once
locScore=0;
var locScoreAdd;
var locVisitTest;
var locationsID=locations.id;
function firstVisit(){
locVisitTest=locVisit.indexOf(locations,0);
if (locVisitTest<0){
locVisitTest=locVisit.push(locations);
locScore=locScore+50;
}
}
var gamePoints;
function totalGamePoints(){
 gamePoints=totalItemPoints + locScore;
 document.getElementById("scoreSpot").innerHTML=("Total Points: "+gamePoints);
}
//Lose Game function. You can lose the game by either going out of the park or visiting too many sites without collecting all the objects. A player can only go outside the park when they are using text entries to navigate. Ignoring a warning in the navigation error box is punishable by death. :) 
//I couldn't get this to print.
	function loseGame(){
		if (currenLoc=1000){
			var deathChoice = Math.floor(Math.random() * 10);
			var dead = loserDeath[deathChoice];
			displayMessage("Wait. What's going on? You suddenly feel SUPER weird. Just as you feel yourself blacking out, you start to turn but, suddenly, "+loserDeath[deathChoice]);
		}
	}
//Loser Deaths
var loserDeath=[
	/*0 Mansion*/"you wake up in a tiny room. As you start for the door, the walls close in on you...YOU'RE DEAD!",
	/*1 Waters*/"you're about to float over the cliff of the Wicked Waters ride...YOU'RE DEAD!",
	/*2 Coaster*/"you're seated in the front car of the coaster and it's about to go through the terrifying series of loops. Only problem, you're not belted in...YOU'RE DEAD!",
	/*3 Circus*/"you're surrounded by clowns. UNDEAD clowns...YOU'RE DEAD!",
	/*4 Confections*/"you're in hot water. Literally! You're in an enormous pot in the consessions kitchen. The temperature is unbearable...YOU'RE DEAD!", 
	/*5 Insect*/"you're in a display. Like a wildlife display. You notice you're not alone. Thousands of large, venomous spiders start covering you...YOU'RE DEAD!",
	/*6 Children's*/"you're in the Children's playground. And you're not alone. Children, or rather the GHOSTS of children surround you. And they want to play...YOU'RE DEAD!",
	/*7 Stadium*/"you're in the stadium. You thought it was for sports, but it's actually modeled after the Colloseum. And four lions are slowly approaching you...YOU'RE DEAD!",
	/*8 Aquarium*/"you're plunged into a tank of water. You break the surface and see a triangular fin. Make that finS...YOU'RE DEAD!",
	/*9 Zoo*/"you're floating down a stream. In the crocodile display...YOU'RE DEAD!",
]
//Onload function
	function init(){
	buttonDisable(0);
	nameCollect();
	displayMessage("A new amusement park, Horrorland, has come to your town. The advertisements describe it as a 'gory, terror-filled fright fest'. Everyone you know has received a free, late-night, 'Exclusive Preview' invitation prior to the grand opening. All your friends can't wait!!! Secretly, though, the place SERIOUSLY creeps you out. You find some excuse to not go, and you wind up being pretty much the only one."+"\n\n"+"The next day, people are raving about how scary/fun it is. You HAVE to go they say. However, in the days afterward, your best friend Sam has gone missing. Everyone has a theory, but only YOU KNOW it was that place. It's up to you to investigate, so, tonight, you're going to find Sam.\n\n Click or enter North,East, or West to continue...");
	} 
//Returns an error message if user enters text that is not NSEW
		function wrongDir(){
		document.getElementById("navError").innerHTML = "Oops! Try that again. N, S, E, or W."
		}
//Changes data entered into all lowercase
//Launches appropriate button function based on NSEW text entered
		function btnGo(){
		dir = document.getElementById("box").value;
		dir = dir.toLowerCase();
		document.getElementById("navError").innerHTML = " ";
		switch(dir){
		case "n": 
		case "north": btnNorth_click();
			break;
		case "w":
		case "west": btnWest_click();
			break;
		case "e": 
		case "east": btnEast_click();
			break;
		case "s":
		case "south": btnSouth_click();
			break;
		case "take":
		case "t": btnTake();
			break;
		case "inventory":
		case "i": btnInventory();
			break;
		default: wrongDir();
		}		
		}
//Disables buttons that are not applicable based on current location
		function buttonDisable(){
		switch (currentLoc){
		//South off
		case 0: document.getElementById("btnN").disabled = false;
				document.getElementById("btnS").disabled = true;
				document.getElementById("btnE").disabled = false; 
				document.getElementById("btnW").disabled = false;	
				document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the park. Don't try to go SOUTH..."
			break;
		//South West off
		case 1: document.getElementById("btnN").disabled = false; 
				document.getElementById("btnS").disabled = true;
				document.getElementById("btnE").disabled = false;
				document.getElementById("btnW").disabled = true;
				document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the park. Don't try to go SOUTH or WEST..."
			break;
		//South East off
		case 2: document.getElementById("btnN").disabled = false;
				document.getElementById("btnS").disabled = true;
				document.getElementById("btnE").disabled = true;
				document.getElementById("btnW").disabled = false;
				document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the park. Don't try to go SOUTH or EAST..."				
			break;
		//East off
		case 5: document.getElementById("btnN").disabled = false;
				document.getElementById("btnS").disabled = false;
				document.getElementById("btnE").disabled = true;
				document.getElementById("btnW").disabled = false;
				document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the park. Don't try to go EAST..."
			break;
		//West off
		case 3: document.getElementById("btnN").disabled = false;
				document.getElementById("btnS").disabled = false;
				document.getElementById("btnE").disabled = false;
				document.getElementById("btnW").disabled = true;
				document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the park. Don't try to go WEST..."				
			break;
		//East West North off
		case 9: document.getElementById("btnN").disabled = true;
				document.getElementById("btnS").disabled = false;
				document.getElementById("btnE").disabled = true;
				document.getElementById("btnW").disabled = true;
				document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the park. Don't try to go NORTH, EAST, or WEST..."
			break;
		//West North off
		case 6: document.getElementById("btnN").disabled = true;
				document.getElementById("btnS").disabled = false;
				document.getElementById("btnE").disabled = false;
				document.getElementById("btnW").disabled = true;
				document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the park. Don't try to go NORTH or WEST..."
			break;
		//East North off
		case 8: document.getElementById("btnN").disabled = true;
				document.getElementById("btnS").disabled = false;
				document.getElementById("btnE").disabled = true;
				document.getElementById("btnW").disabled = false;
				document.getElementById("navError").innerHTML = "WARNING: You've reached the edge of the park. Don't try to go NORTH, EAST, or WEST..."
			break;
		case 1000: document.getElementById("btnN").disabled = true;
				document.getElementById("btnS").disabled = true;
				document.getElementById("btnE").disabled = true;
				document.getElementById("btnW").disabled = true;
				document.getElementById("btnTake").disabled = true;
				document.getElementById("btnInventory").disabled = true;
				document.getElementById("btnGo").disabled = true;
				break;
		default: document.getElementById("btnN").disabled = false;
				document.getElementById("btnS").disabled = false;
				document.getElementById("btnE").disabled = false;
				document.getElementById("btnW").disabled = false;
				}
}
function helpMe(){
var help = "Click an active direction to move or enter a compass direction into the text box below and click GO. To pick up an item, click the TAKE button or enter Take into the text box below and click GO. Any questions or problems with the game, click the CONTACT link."
displayMessage(help);
}