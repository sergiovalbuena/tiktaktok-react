import { Square } from "./Square";

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;

  return (
    winner !== null && (
      <section className="winner">
        <div className="text">
          <h2>{winner === false ? "Empate" : `Ganador: `}</h2>
          <header className="win">{winner && <Square>{winner}</Square>}</header>

          <footer>
            <button onClick={resetGame}>Start Again</button>
          </footer>
        </div>
      </section>
    )
  );
}
