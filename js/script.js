const main = document.querySelector("#main");
const box = document.querySelector("#box");

const gameBoard = (function () {
  const scoreBoard = document.querySelector("#score");
  let winner = false;
  let board = [
    { position: "a1", playerFigure: null },
    { position: "a2", playerFigure: null },
    { position: "a3", playerFigure: null },
    { position: "b1", playerFigure: null },
    { position: "b2", playerFigure: null },
    { position: "b3", playerFigure: null },
    { position: "c1", playerFigure: null },
    { position: "c2", playerFigure: null },
    { position: "c3", playerFigure: null },
  ];
  function gameClear() {
    for (let i = 0; i < buttonList.length; i++) {
      actButton = buttonList[i];
      let getId = actButton.id;
      document.querySelector(`#${getId}`).disabled = true;
    }
  }
  const checkBoard = (player, name) => {
    switch (true) {
      case board.some((e) => {
        return e.playerFigure === null;
      }) === false:
        scoreBoard.innerHTML = "it´s a tie";
        gameClear();
        break;
      case board[0].playerFigure === player &&
        board[1].playerFigure === player &&
        board[2].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}!`;
        winner = true;
        gameClear();
        console.log(winner);
        break;
      case board[3].playerFigure === player &&
        board[4].playerFigure === player &&
        board[5].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}!`;
        gameClear();
        break;
      case board[6].playerFigure === player &&
        board[7].playerFigure === player &&
        board[8].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}!`;
        gameClear();
        break;
      case board[0].playerFigure === player &&
        board[3].playerFigure === player &&
        board[6].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}!`;
        gameClear();
        break;
      case board[1].playerFigure === player &&
        board[4].playerFigure === player &&
        board[7].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}!`;
        gameClear();
        break;
      case board[2].playerFigure === player &&
        board[5].playerFigure === player &&
        board[8].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}!`;
        gameClear();
        break;
      case board[0].playerFigure === player &&
        board[4].playerFigure === player &&
        board[8].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}!`;
        gameClear();
        break;
      case board[6].playerFigure === player &&
        board[4].playerFigure === player &&
        board[2].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}!`;
        gameClear();
        break;
      default:
        console.log("play continue");
        break;
    }
  };
  return { checkBoard, board, scoreBoard, winner };
})();

const play = (function () {
  const { checkBoard, board, scoreBoard } = gameBoard;
  function createPlayer(name, figure, turn) {
    return { name, figure, turn };
  }

  function game(e) {
    e.preventDefault();
    let pjTurn = player1.turn ? player2 : player1;
    let playerTurn = player1.turn ? player1 : player2;
    scoreBoard.innerHTML = `${pjTurn.name}´s turn`;
    board[e.target.value].playerFigure = playerTurn.figure;
    checkBoard(playerTurn.figure, playerTurn.name);
    console.log(board);
    player1.turn ? (player1.turn = false) : (player1.turn = true);
    player2.turn === false ? (player2.turn = true) : (player2.turn = false);
  }
  function createGame(){
    main.innerHTML += `<div id="box">
            <button id="zero" value="0" ></button>
            <button id="one" value="1"></button>
            <button id="two" value="2"></button>
            <button id="three" value="3"></button>
            <button id="four" value="4"></button>
            <button id="five" value="5"></button>
            <button id="six" value="6"></button>
            <button id="sevent" value="7"></button>
            <button id="eight" value="8"></button>
        </div>`; 
  }


  return { createPlayer, game, createGame };
})();

const player1 = play.createPlayer("Player 1", "x", true);
const player2 = play.createPlayer("Player 2", "o", false);
console.log(player1.winner);
console.log(player1.winner);

let buttonList = box.getElementsByTagName("button");
for (let index = 0; index < buttonList.length; index++) {
  actButton = buttonList[index];
  let getId = actButton.id;
  actButton.addEventListener("click", (e) => {
    e.preventDefault();
    play.game(e);
    document.querySelector(`#${getId}`).innerHTML = player1.turn
      ? player2.figure
      : player1.figure;
  });
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  box.innerHTML = "";

})