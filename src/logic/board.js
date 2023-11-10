import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
  //recorrer todas las combinaciones para ver si X u O gano
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] && //si no es null
      boardToCheck[a] === boardToCheck[b] && //si son iguales
      boardToCheck[a] === boardToCheck[c] //si son iguales
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  //revisamos si hay empate, si no hay mas espacios vacios en el tablero
  return newBoard.every((square) => square !== null);
};
