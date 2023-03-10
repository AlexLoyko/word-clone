import React from "react";
import Banner from "../Banner";

function WinningBanner({ numOfGuesses }) {
  return (
      <Banner type='happy'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{` ${numOfGuesses} ${numOfGuesses > 1 ? 'guesses' : 'guess'}`}</strong>.
        </p>
      </Banner>
  );
}

export default WinningBanner;
