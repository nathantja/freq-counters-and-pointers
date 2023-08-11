"use strict";


// function that accepts two arrays array 1 contains "keys" array 2 contains
// "values" function returns object created from both arrays
//
// initialize empty object iterate through first array of keys, then set
// object.key value to the value array
// if value is undefined, make sure to set key/value to null
// return object at the end



/** function accepts two arrays, one with keys and one with values. Returns
 * object with said keys and values. If array value is undefined, resulting key
 * is set to null.
 * @param {Array} arrayOfKeys array with values for keys
 * @param {Array} arrayOfValues array with values for values
 * @Returns object
 */
function twoArrayObject(arrayOfKeys, arrayOfValues) {
  const object = {};

  for (let i = 0; i < arrayOfKeys.length; i++) {
    const key = arrayOfKeys[i];
    const value = arrayOfValues[i] || null;

    object[key] = value;
  }
  return object;
}
