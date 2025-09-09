//  Given an array, find the maximum sum of any contiguous subarray. (Kadane's Algorithm)

const findmaxsubarray = (nums) => {
  let currentSum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    maxSum = Math.max(currentSum, maxSum);
    

    if (currentSum < 0) {
      currentSum = 0;
    }
    console.log(`currentSum: ${currentSum}, maxSum: ${maxSum}`);
  }

  return maxSum;
};

const result = findmaxsubarray([1, 2, 3, -8, -5, 10]);

console.log(result);



const findSum = (arr) => {
  let maxSum = arr[0];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    maxSum = Math.max(maxSum, currentSum);
    

    if (currentSum < 0) {
      currentSum = 0;
    }
    console.log(`currentSum: ${currentSum}, maxSum: ${maxSum}`);
  }

  return maxSum;
};

const arr = [-1, 5, -8, 8, -6, -4, -10, 15];
const result2 = findSum(arr);
console.log(result2);
