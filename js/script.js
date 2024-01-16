const main = document.querySelector("#main");
const box = document.querySelector("#box");

const player = function (name, figure) {
  let points = 0;
  let turn = null;
  const givePoint = () => points++;

  return { name, figure, points, givePoint, turn };
};

const gameBoard = function () {
  let board = [
    { position: a1, playerFigure: null },
    { position: a2, playerFigure: null },
    { position: a3, playerFigure: null },
    { position: b1, playerFigure: null },
    { position: b2, playerFigure: null },
    { position: b3, playerFigure: null },
    { position: c1, playerFigure: null },
    { position: c2, playerFigure: null },
    { position: c3, playerFigure: null },
  ];

  let boardPosition = { a1, a2, a3, b1, b2, b3, c1, c2, c3 };

  const checkBoard = () => {
    switch (board) {
      case board[0].playerFigure === figure &&
        board[1].playerFigure === figure &&
        board[2].playerFigure === figure:
        console.log("win f.a");
        break;
      case board[3].playerFigure === figure &&
        board[4].playerFigure === figure &&
        board[5].playerFigure === figure:
        console.log("win f.b");
        break;
      case board[6].playerFigure === figure &&
        board[7].playerFigure === figure &&
        board[8].playerFigure === figure:
        console.log("win f.c");
        break;
      case board[0].playerFigure === figure &&
        board[3].playerFigure === figure &&
        board[6].playerFigure === figure:
        console.log("win c.board[0].position");
        break;
      case board[1].playerFigure === figure &&
        board[4].playerFigure === figure &&
        board[7].playerFigure === figure:
        console.log("win c.board[1].position");
        break;
      case board[2].playerFigure === figure &&
        board[5].playerFigure === figure &&
        board[8].playerFigure === figure:
        console.log("win c.board[2].position");
        break;
      case board[0].playerFigure === figure &&
        board[4].playerFigure === figure &&
        board[8].playerFigure === figure:
        console.log("win x.a");
        break;
      case board[6].playerFigure === figure &&
        b2 === figure &&
        board[2].playerFigure === figure:
        console.log("win x.c");
        break;
      default:
        console.log("play continue");
        break;
    }
  };
  return { checkBoard, board };
};

gameBoard.board[0].playerFigure = "x";
gameBoard.checkBoard();

//verificar que en el array no existan 3 figuras seguidad
// switch que tenga los caso de victoria y solo cambie la figura en la veificacion (8 casos)
//
