import React from 'react'

const NewGameButton = (props) => {

function resetGame() {
    props.setGuessedLetters([]);
    props.setCurrentWord(props.getRandomWord())
} 

  return (
    <button className='newGame' onClick={resetGame}>
        New Game
    </button>
  )
}

export default NewGameButton