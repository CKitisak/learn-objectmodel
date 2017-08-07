const assert = require('assert');
const objModel = require('objectmodel');

const Cards = new objModel.ArrayModel([Number, 'J','Q','K']);

function minimumCard (cards) {
    return cards.length === 2 ? true : false;
}

// Hand is an array of 2 Numbers, J, Q, or K
const Hand = Cards.assert(minimumCard, 'should have two cards');

let myHand = Hand([2, 'K']);
console.log('Cards on my hand now:', myHand);

// // ERROR: can't hold 3 cards
// console.log('Added one "K" card');
// myHand.push('K');
// console.log('Cards on my hand now:', myHand);
