import { useState } from 'react'
import Header from './components/Header'
import AvengersElements from './components/AvengersElements'
import StatusComponent from './components/StatusComponent'
import WordComponent from './components/WordComponent'
import Keyboard from './components/Keyboard'
import NewGameButton from './components/NewGameButton'
import { avengers } from './utils/avengers'
import { getRandomWord } from './utils/getRandomWord'
import Confetti from 'react-confetti'

function App() {

//state variables
const [currentWord, setCurrentWord] = useState(() => getRandomWord());
const [guessedLetters, setGuessedLetters] = useState([])

//derived variables
const wrongGuesses = guessedLetters.filter(letter => !currentWord.includes(letter)).length
const gameLost = wrongGuesses === avengers.length - 1
const gameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
const gameOver = gameWon || gameLost

  return (
    <main>
      {gameWon && <Confetti />}
      <Header />
      <StatusComponent guessedLetters={guessedLetters} currentWord={currentWord} avengers={avengers} gameOver={gameOver} gameLost={gameLost} gameWon={gameWon} wrongGuesses={wrongGuesses}/>
      <AvengersElements avengers={avengers} wrongGuesses={wrongGuesses}/>
      <WordComponent currentWord={currentWord} guessedLetters={guessedLetters} gameOver={gameOver}/>
      <Keyboard currentWord={currentWord} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} gameOver={gameOver}/>
      {gameOver && <NewGameButton setCurrentWord={setCurrentWord} setGuessedLetters={setGuessedLetters} getRandomWord={getRandomWord}/>}
    </main>
  )
}

export default App
