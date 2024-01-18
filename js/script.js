const main = document.querySelector("#main");

const gameBoard = (function () {
  const scoreBoard = document.querySelector("#score");
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
    const box = document.querySelector("#box");
    const buttonList = box.getElementsByTagName("button");
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
        gameClear();
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
        break;
    }
  };
  return { checkBoard, board, scoreBoard };
})();

const play = (function () {
  const { checkBoard, board, scoreBoard } = gameBoard;
  function createPlayer(name, figure, turn) {
    return { name, figure, turn };
  }

  const player1 = createPlayer("Player 1", "x", true);
  const player2 = createPlayer("Player 2", "o", false);

  function game(e) {
    e.preventDefault();
    let pjTurn = player1.turn ? player2 : player1;
    let playerTurn = player1.turn ? player1 : player2;
    scoreBoard.innerHTML = `${pjTurn.name}´s turn`;
    board[e.target.value].playerFigure = playerTurn.figure;
    checkBoard(playerTurn.figure, playerTurn.name);
    player1.turn ? (player1.turn = false) : (player1.turn = true);
    player2.turn === false ? (player2.turn = true) : (player2.turn = false);
  }
  function createGame() {
    let div = document.createElement("div");
    div.setAttribute("id", "box");
    div.innerHTML = `<div id="box">
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
    main.appendChild(div);
  }
  createGame();

  function beginGame() {
    const box = document.querySelector("#box");
    const buttonList = box.getElementsByTagName("button");
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
  }
  beginGame();

  function refreshBoard() {
    board.forEach((e) => {
      e.playerFigure = null;
    });
  }
  function reset() {
    const reset = document.querySelector("#reset");
    reset.addEventListener("click", (e) => {
      const box = document.querySelector("#box");
      e.preventDefault();
      box.innerHTML = "";
      main.removeChild(box);
      createGame();
      beginGame();
      refreshBoard();
      scoreBoard.innerHTML = "Click to begin Player 1";
    });
  }
  reset();
  return { createPlayer, game, createGame, beginGame, player1, player2 };
})();
