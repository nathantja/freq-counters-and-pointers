'use strict'
//this function will take in an array of non-zero numbers, and separate them. Negative numbers to the left, and positive to the right.
//They do not need to be in order. We then return this array

function separatePositive(nums) {


  //create a newArray to hold negative nums;
  //iterate over nums once, if that the current element is a negative number, push the pop
  //return nums.concat(newArray)

  const posiArray = [];
  let negArray = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    const currentNum = nums.pop();
    if (currentNum < 0) {
      negArray.push(currentNum);
    } else {
      posiArray.push(currentNum);
    }
  }

  posiArray.forEach(num => nums.push(num));
  negArray.forEach(num => nums.push(num));

  return nums;
}

console.log(separatePositive([2, -1, -3, 6, -8, 10]));