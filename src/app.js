/* eslint-disable no-console */
'use strict';

const { randomFourDigits } = require('./modules/random-number');
const terminal = require('./modules/terminal');
const countCows = require('./modules/counter-of-cows');

const gameNumber = randomFourDigits();

const questions = ['Guess the 4 digits number 🧞? ', 'Guess again! '];
let qNumber = 0;

const letsPlay = () => {
  terminal.question(questions[qNumber], (guess) => {
    if (guess.length !== 4) {
      console.log('You have to guess a 4 digits number...');
      qNumber = 1;
      letsPlay();
    } else {
      const letsCount = countCows(gameNumber, guess);

      console.log(
        `Your answer had ${letsCount.bulls} Bulls and ${letsCount.cows} Cows`
      );

      if (letsCount.bulls === 4) {
        console.log('You win!)');
        terminal.close();
      } else {
        console.log('Almost there...');
        letsPlay();
      }
    }
  });
};

letsPlay();
