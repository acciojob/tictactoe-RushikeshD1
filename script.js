//your JS code here. If required.
const players = document.getElementById("players");
const message = document.getElementsByClassName("message")[0];
const mainParent = document.getElementById("main-parent");

let player = {};
let currentPlayer = "x";
let gameActive = true;

const winPatterns = [
  [1,2,3], [4,5,6], [7,8,9],
  [1,4,7], [2,5,8], [3,6,9],
  [1,5,9], [3,5,7]
];


function checkWinner() {
	return winPatterns.some(p => p.every(id => document.getElementById(id).textContent === currentPlayer))
}

function handleClick(e) {
  if (!gameActive) return;
  if (e.target.textContent !== "") return;

  e.target.textContent = currentPlayer;

  if (checkWinner()) {
    message.textContent = `${player[currentPlayer]} congratulations you won!`;
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "x" ? "o" : "x";
  message.textContent = `${player[currentPlayer]}, you're up`;
}

function createBoard(){
	const gridDiv = document.createElement('div');
	gridDiv.style.display = "grid";
	gridDiv.style.gridTemplateColumns = "repeat(3, 100px)";
	gridDiv.style.gridTemplateRows = "repeat(3, 100px)";

	for(let  i=1; i<=9; i++){
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
	const player1 = document.getElementById("player1").value;
	const player2 = document.getElementById("player2").value;

	if (player1.trim() === "" || player2.trim() === ""){
		alert("Please fill all fields!");
		return;
	}

	players.style.display = "none";	
	player = {x: player1, o: player2};
	message.innerHTML = "";
	message.innerHTML = `${player.x}, you're up`;

	createBoard();
	
}

