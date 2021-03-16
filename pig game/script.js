'use strict'

const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')

const dice = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')

const current1 = document.querySelector('#current--0')
 
score0El.textContent = 0
score1El.textContent = 0
dice.classList.add('hidden')

let currentScore = 0

btnRoll.addEventListener('click', () => {
   // 1. generating a random dice roll
   const diceRandom = Math.trunc(Math.random() * 6) + 1  
   
   // 2. display dice
   dice.classList.remove('hidden')
   dice.src = `dice-${diceRandom}.png`

   // 3. check for rolled if 1
   if(diceRandom !== 1){
      currentScore += diceRandom
      current1.textContent = currentScore
   } else{
      current1.textContent = 0 
   }
})
