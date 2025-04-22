import React from 'react'
import clsx from 'clsx'

const WordComponent = (props) => {

const wordElement = props.currentWord.split("").map((letter, index) => {
const className = clsx('letter',{
    missed: props.currentWord.split("").includes(letter) && !props.guessedLetters.includes(letter) && props.gameOver
})
    return (
        <span key={index} className={className}>{props.guessedLetters.includes(letter) ? letter.toUpperCase() : props.currentWord.split("").includes(letter) && !props.guessedLetters.includes(letter) && props.gameOver ? letter.toUpperCase() : ""}</span>
    )
})

  return (
    <section className='word'>
        {wordElement}
    </section>
  )
}

export default WordComponent