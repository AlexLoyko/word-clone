import React from "react";
import { range } from "../../utils";
import {checkGuess} from "../../game-helpers";

function Cell({ letter, status }) {
    const className = status
        ? `cell ${status}`
        : 'cell'

    return (
        <span className={className}>
            { letter }
        </span>
    );
}

function Guess({ value, answer }) {
  const checkedGuessLetters = checkGuess(value, answer);

  return (
      <p className="guess">
        { range(5).map(num => (
            <Cell
                key={num}
                letter={checkedGuessLetters && checkedGuessLetters[num].letter}
                status={checkedGuessLetters && checkedGuessLetters[num].status}
            />
        ))}
      </p>
  );
}

export default Guess;
