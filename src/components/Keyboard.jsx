import React from 'react'
import clsx from 'clsx';

const Keyboard = (props) => {

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function guess(letter) {
    props.setGuessedLetters(prevGuess => (
        prevGuess.includes(letter) ? prevGuess : [...prevGuess, letter]
    ))
}

const keyboardElements = alphabet.split("").map(letter => {
const className = clsx('keyButton', {
    correct: props.currentWord.split("").includes(letter) && props.guessedLetters.includes(letter),
    wrong: !props.currentWord.split("").includes(letter) && props.guessedLetters.includes(letter)
})
    return (
        <button 
        className={className} 
        onClick={() => guess(letter)}
        disabled={props.gameOver}
        >{letter.toUpperCase()}
        </button>
    )
})
  return (
    <section className='keyboard'>
        {keyboardElements}
    </section>
  )
}

export default Keyboard