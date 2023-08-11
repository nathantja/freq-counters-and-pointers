"use strict";
//we will receive a word and letters, we need to check to see if the word
//can be spelled with the letters passed in
//our inputs will only be lowercase letters
//return a boolean

// add whatever parameters you deem necessary & write doc comment

//TODO:add docstrings
function getFrequencyCounter(items) {

  //declare an object literal where we will count the frequency of our letters
  //iterate through 'items', if a key already exists for item, incrment, if not, create key and set to one
  //return objectliteral

  const frequency = {};

  for (const item of items) {
    const currentValue = frequency[item] || 0;
    frequency[item] = currentValue + 1;
  }

  return frequency;

}

function canConstructWord(word, letters) {
  //input word and letters
  //for each letter in the word, we will want to check to see if this letter
  //is in letters as well
  //if not return false
  //if were get to the end of word without issue, return true

  const wordFreqs = getFrequencyCounter(word);
  const lettersFreqs = getFrequencyCounter(letters);

  for (const letter in wordFreqs) {

    if (!(letter in lettersFreqs) || lettersFreqs[letter] < wordFreqs[letter]) {
      return false;
    }

  }

  return true;

}