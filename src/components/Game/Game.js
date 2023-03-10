import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WinningBanner from "../WinningBanner";
import LosingBanner from "../LosingBanner";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function onNewGuess(newGuess) {
    const nextGuesses = [...guesses, newGuess]
    setGuesses(nextGuesses);

    if (newGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return <>
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput onNewGuess={onNewGuess} disabled={gameStatus !== 'running'}/>
    { gameStatus === 'won' && <WinningBanner numOfGuesses={guesses.length}/> }
    { gameStatus === 'lost' && <LosingBanner answer={answer}/>}
  </>
}

export default Game;
