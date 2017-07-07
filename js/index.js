var player = "X"
var gameboard = $("table");
var reset = $("button");

$( "td" ).click(function() {
	if (player === "X") {
		$(this).toggleClass("clicked-x");
		$(this).text("X");
		$(this).unbind("click");
		$("#turn-tracker").text("Player O, it is your turn")
		player = "O";
	} else if (player === "O") {
		$(this).toggleClass("clicked-o");
		$(this).text("O");
		$(this).unbind("click");
		$("#turn-tracker").text("Player X, it is your turn.")
		player = "X";	
	}
});

/*function didPlayerXWin() {
	var winner = "0";
	if (gameboard.find("#1").hasClass("clicked-x") &&
		gameboard.find("#2").hasClass("clicked-x") &&
		gameboard.find("#3").hasClass("clicked-x")) {
		winner = "Player X";	
		console.log("Player X Wins!");
	} else if (gameboard.find("#1").hasClass("clicked-x") &&
		gameboard.find("#4").hasClass("clicked-x") &&
		gameboard.find("#7").hasClass("clicked-x"))	{
		winner = "Player X";
		console.log("Player X Wins!");
	}
};*/

var winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[0, 4, 8],
]

$("button").click(function() {
	location.reload();
});

