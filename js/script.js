const main = document.querySelector("#main");

const player = function (name, figure) {
  let points = 0;
  let turn = null;
  const givePoint = () => points++;

  return { name, figure, points, givePoint, turn };
};


