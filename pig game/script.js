'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', () => {
  // 1. generating a random dice roll
  const diceRandom = Math.trunc(Math.random() * 6) + 1;

  // 2. display dice
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRandom}.png`;

  // 3. check for rolled if 1
  if (diceRandom !== 1) {
    // add dice to current score
    currentScore += diceRandom;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;

    //  current1.textContent = currentScore;
  } else {
    // switch to the next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0.classList.toggle(`player--active`);
    player1.classList.toggle(`player--active`);
  }
});
