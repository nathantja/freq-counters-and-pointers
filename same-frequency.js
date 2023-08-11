"use strict";

// use frequency counter on both arguments
// compare one counter to the other
// make sure length is the same

/**
 * Function that creates an object counter for an iterable.
 * @param {Iterable} items
 * @returns object
 */
function getFrequencyCounter(items) {
  const frequency = {};

  for (const item of items) {
    const currentValue = frequency[item] || 0;
    frequency[item] = currentValue + 1;
  }

  return frequency;

}

/**
 * Function that given two positive integers, finds out if the two numbers have
 * the same frequency of digits.
 * @param {number} num1
 * @param {number} num2
 * @returns true or false
 */
function sameFrequency(num1, num2) {
  const num1String = num1.toString();
  const num2String = num2.toString();
  if (num1String.length !== num2String.length) return false;

  const num1Freq = getFrequencyCounter(num1String);
  const num2Freq = getFrequencyCounter(num2String);

  for (const key in num1Freq) {
    if (num1Freq[key] !== num2Freq[key]) {
      return false;
    }
  }
  return true;
}
