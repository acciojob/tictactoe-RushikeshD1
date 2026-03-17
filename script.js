//your JS code here. If required.
const players = document.getElementById("players");
const message = document.getElementsByClassName("message")[0];
const mainParent = document.getElementById("main-parent");

let player = {};
let currentPlayer = "X";
let gameActive = true;

function handleClick(e){
	e.target.textContent = currentPlayer;

	currentPlayer = currentPlayer === "X" ? "O" : "X";
	message.innerHTML = `<h1>${player[currentPlayer]}, you're up</h1>`
	
}

function createBoard(){
	const gridDiv = document.createElement('div');
	gridDiv.style.display = "grid";
	gridDiv.style.gridTemplateColumns = "repeat(3, 100px)";
	gridDiv.style.gridTemplateRows = "repeat(3, 100px)";

	for(let  i=0; i<9; i++){
		const cell = document.createElement("div");
		cell.style.border = "1px solid black";
		cell.className  = `cell`;
		cell.id = i;
		cell.style.display = "flex";
		cell.style.fontSize = "24px";
		cell.style.alignItems = "center";
	    cell.style.justifyContent = "center";
		gridDiv.appendChild(cell);
		cell.addEventListener("click", handleClick);
	}

	mainParent.appendChild(gridDiv);
}

function playGame(){
	const player1 = document.getElementById("player-1").value;
	const player2 = document.getElementById("player-2").value;

	if (player1.trim() === "" || player2.trim() === ""){
		alert("Please fill all fields!");
		return;
	}

	players.style.display = "none";	
	player = {X: player1, O: player2};
	message.innerHTML = "";
	message.innerHTML = `<h1>${player.X}, you're up</h1>`;

	createBoard();
	
}

