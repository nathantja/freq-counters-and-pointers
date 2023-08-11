"use strict";

//in this function, we receive an sorted array of numbers, as well as a targeted average.
//we want to go through the array, and see if there are any pairs, where their average
//is equal to the target average, and if so we return true

// add whatever parameters you deem necessary & write docstring
function averagePair(nums, targetAvg) {

  //we will use multiple pointers strategy
  //begin by ideclaring a left and right pointer
  //while the left is lower than the right, we will look at the pointers, and see if their average is
  //equal to target average. If so, we return true. If not, we will then decrement the right pointer, if the
  //average is too high.
  //we will increment the left if too low,
  //if we get outside of the while loop, we will return false

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {

    const currentAvg = (nums[left] + nums[right]) / 2;

    if (currentAvg === targetAvg) {
      return true;
    } else if (currentAvg > targetAvg) {
      right--;
    } else if (currentAvg < targetAvg) {
      left++;
    }

  }

  return false;

}

