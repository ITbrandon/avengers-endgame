import React from 'react'
import clsx from 'clsx'
import { generateFarewellText } from '../utils/farewellTexts'

const StatusComponent = (props) => {

const lastLetterGuessed = props.guessedLetters[props.guessedLetters.length - 1]

const statusStyles = clsx('status',{
    win: props.gameWon,
    lose: props.gameLost,
    midGame: !props.gameOver && !props.currentWord.split("").includes(lastLetterGuessed) && props.wrongGuesses > 0
})

function renderStatus() {
    if(!props.gameOver && !props.currentWord.split("").includes(lastLetterGuessed) && props.wrongGuesses > 0)
    {
    const guessCounter = (props.avengers.length - 1) - props.wrongGuesses
        return (
            <>
            <h1>{generateFarewellText(props.avengers[props.wrongGuesses - 1].name)}</h1>
            <p>You Have {guessCounter} {guessCounter === 1 ? "Life" : "Lives"} Left</p>
            </>
        )
    }
}

  return (
    <section className={statusStyles}>
        {renderStatus()}
        <h1>{props.gameWon ? "You Win" : props.gameLost ? "You Lose" : ""}</h1>
        <p>{props.gameWon ? "Well Done" : props.gameLost ? "Better Luck Next Time" : ""}</p>
    </section>
  )
}

export default StatusComponent