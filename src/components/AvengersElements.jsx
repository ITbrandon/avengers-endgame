import React from 'react'
import clsx from 'clsx'

const avengersElements = (props) => {

const avengersElements = props.avengers.map((char, index) => {
const charStyles = {
    backgroundColor: char.backgroundColor,
    color: char.color
}

const className = clsx('chip', {
    lostHero: index < props.wrongGuesses
})
    return (
        <span key={char.name} className={className} style={charStyles}>{char.name}</span>
    )
    
})

  return (
    <section className='avengers'>
        {avengersElements}
    </section>
  )
}

export default avengersElements