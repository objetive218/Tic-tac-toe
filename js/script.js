const main = document.querySelector("#main");
const box = document.querySelector("#box");

const gameBoard = (function () {
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

  //let boardPosition = { a1, a2, a3, b1, b2, b3, c1, c2, c3 };

  const checkBoard = (player) => {
    switch (true) {
      case board.some((e) => {
        return e.playerFigure === null;
      }) === false:
        console.log("it´s a tie");
        break;
      case board[0].playerFigure === player &&
        board[1].playerFigure === player &&
        board[2].playerFigure === player:
        console.log("win f.a");
        break;
      case board[3].playerFigure === player &&
        board[4].playerFigure === player &&
        board[5].playerFigure === player:
        console.log("win f.b");
        break;
      case board[6].playerFigure === player &&
        board[7].playerFigure === player &&
        board[8].playerFigure === player:
        console.log("win f.c");
        break;
      case board[0].playerFigure === player &&
        board[3].playerFigure === player &&
        board[6].playerFigure === player:
        console.log("win c.board[0].position");
        break;
      case board[1].playerFigure === player &&
        board[4].playerFigure === player &&
        board[7].playerFigure === player:
        console.log("win c.board[1].position");
        break;
      case board[2].playerFigure === player &&
        board[5].playerFigure === player &&
        board[8].playerFigure === player:
        console.log("win c.board[2].position");
        break;
      case board[0].playerFigure === player &&
        board[4].playerFigure === player &&
        board[8].playerFigure === player:
        console.log("win x.a");
        break;
      case board[6].playerFigure === player &&
        board[5].playerFigure === player &&
        board[2].playerFigure === player:
        console.log("win x.c");
        break;
      default:
        console.log("play continue");
        break;
    }
  };
  return { checkBoard, board };
})();

const play = (function () {
  const { checkBoard, board } = gameBoard;
  function createPlayer(name, figure, turn) {
    let points = 0;
    const givePoint = () => points++;

    return { name, figure, givePoint, points, turn };
  }

  function game(e) {
    e.preventDefault();
    let playerTurn = player1.turn ? player1 : player2;
    let queryaVar = document.getElementById("");
    board[e.target.value].playerFigure = playerTurn.figure;
    checkBoard(playerTurn.figure);
    console.log(e.target.value);
    console.log(board);

    player1.turn ? (player1.turn = false) : (player1.turn = true);
    player2.turn === false ? (player2.turn = true) : (player2.turn = false);
  }

  return { createPlayer, game };
})();

const player1 = play.createPlayer("player 1", "x", true);
const player2 = play.createPlayer("player 2", "o", false);
console.log(player1.figure, player1.turn);
console.log(player2.figure);

//verificar que en el array no existan 3 figuras seguidad
// switch que tenga los caso de victoria y solo cambie la figura en la veificacion (8 casos)
//
//assing events to divs

let test = box.getElementsByTagName("button");
for (let index = 0; index < test.length; index++) {
  e = test[index];
  e.addEventListener("click", play.game);
}
