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

        break;
      case board[0].playerFigure === player &&
        board[1].playerFigure === player &&
        board[2].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}`;
        winner = true;
        gameClear();
        console.log(winner);
        break;
      case board[3].playerFigure === player &&
        board[4].playerFigure === player &&
        board[5].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}`;
        break;
      case board[6].playerFigure === player &&
        board[7].playerFigure === player &&
        board[8].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}`;
        break;
      case board[0].playerFigure === player &&
        board[3].playerFigure === player &&
        board[6].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}`;
        break;
      case board[1].playerFigure === player &&
        board[4].playerFigure === player &&
        board[7].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}`;
        break;
      case board[2].playerFigure === player &&
        board[5].playerFigure === player &&
        board[8].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}`;
        break;
      case board[0].playerFigure === player &&
        board[4].playerFigure === player &&
        board[8].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}`;
        break;
      case board[6].playerFigure === player &&
        board[4].playerFigure === player &&
        board[2].playerFigure === player:
        scoreBoard.innerHTML = `Win ${name}`;
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
    let playerTurn = player1.turn ? player1 : player2;
    scoreBoard.innerHTML = `${playerTurn.name}´s turn`;
    board[e.target.value].playerFigure = playerTurn.figure;
    checkBoard(playerTurn.figure, playerTurn.name);
    console.log(board);
    player1.turn ? (player1.turn = false) : (player1.turn = true);
    player2.turn === false ? (player2.turn = true) : (player2.turn = false);
  }

  return { createPlayer, game };
})();

const player1 = play.createPlayer("Player 1", "x", true);
const player2 = play.createPlayer("Player 2", "o", false);
console.log(player1.winner);
console.log(player1.winner);
//verificar que en el array no existan 3 figuras seguidad
// switch que tenga los caso de victoria y solo cambie la figura en la veificacion (8 casos) check
//
//assign events to divs

let buttonList = box.getElementsByTagName("button");
for (let index = 0; index < buttonList.length; index++) {
  actButton = buttonList[index];
  let getId = actButton.id;
  actButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (gameBoard.winner) {
      document.querySelector(`#${getId}`).disabled = true;
    } else {
      play.game(e);
      document.querySelector(`#${getId}`).innerHTML = player1.turn
        ? player2.figure
        : player1.figure;
    }
  });
}
