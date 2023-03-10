import React from 'react';

const GuessInput = ({ onNewGuess, disabled }) => {
    const [guessValue, setGuessValue] = React.useState('');

    return (
        <form
            className="guess-input-wrapper"
            onSubmit={(event) => {
                event.preventDefault();
                console.log({ guessValue });
                onNewGuess(guessValue)
                setGuessValue('');
            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={guessValue}
                onChange={(e) => {
                    setGuessValue(e.target.value.toUpperCase())
                }}
                pattern='[A-Z]{5}'
                title="Only 5-letter words are accepted."
                disabled={disabled}
            />
        </form>
    );
}

export default GuessInput;