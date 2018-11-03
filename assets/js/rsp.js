// VARIABLES AT THE TOP
var options = 
	["rock","paper","scissors"];
var computerchoice;
var userchoice;
var result, buttons;


// FUNCTIONS AFTER VARIABLES
function makeComputerChoice(){
	console.log("Computer was",computerchoice);
	return computerchoice = Math.floor( Math.random() * options.length );   
}
/* Dont need this part, just to see what computer is doing
function showComputerChoice(){
	document.write(options[computerchoice])
}
makeComputerChoice ();
showComputerChoice ();
===== END of testing======*/
function makeUserChoice(choice){
	makeComputerChoice();// makeComputerChoice when user made a choice
	userchoice = choice; 
	//  show the options in console
	console.log(
		options[userchoice],
		"vs",
		options[computerchoice]
	);
	//  show the options on the document
	result.innerHTML =
		"<img class='resultimg'src='assets/images/"+
			options[userchoice]+".png'>"+
		" <span>vs</span> "+ "<img class='resultimg'src='assets/images/"+
			options[computerchoice]+".png'>";

	makeGameResult();
}
function makeGameResult(){
	var resultstring = "";
	if(userchoice == computerchoice) {
		console.log("It's a tie");
		resultstring="<div class='resulttext'>It's a tie</div>";
	}
	else if(
		(userchoice == 0 && computerchoice == 1) || 
        (userchoice == 1 && computerchoice == 2) || 
        (userchoice == 2 && computerchoice == 0) 
		) {
		console.log("You lost!");
		resultstring="<div class='resulttext'>Boo you lost!</div>";
	}
	else if( 
		(userchoice == 0 && computerchoice == 2) ||
        (userchoice == 1 && computerchoice == 0) ||
        (userchoice == 2 && computerchoice == 1)
		)  {
		console.log("You won!");
		resultstring="<div class='resulttext'>Wow you won!</div>";
	}

	result.innerHTML += 
		resultstring+
		"<div><button class='again' onclick='showOptions()'>Want To Play Again?</button></div>";
	showResults();
	"<div>Score:()</button></div>";
	showResults();

}

//Show and hide the 3 buttons. When showing results, show play agian button; Click play button, show three options.
function showOptions(){
	buttons.style.display = "block";
	result.style.display = "none";
}
function showResults(){
	buttons.style.display = "none";
	result.style.display = "block";
}


// model view controller MVC

// Everything is set up ready to go. Let the browser display your buttons. By default, showOptions() will display buttons and hide the result.
// Since we put our js on top, we need to add onload 
window.onload = function(){
	result = document.querySelector("#rps_result");
	buttons = document.querySelector("#rps_buttons");
    document.querySelector(".btn_rock").addEventListener("click", function(){makeUserChoice(0);}, false)
    document.querySelector(".btn_paper").addEventListener("click", function(){makeUserChoice(1);}, false)
    document.querySelector(".btn_scissors").addEventListener("click", function(){makeUserChoice(2);}, false)
}
