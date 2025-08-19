//  Given an array, find the maximum sum of any contiguous subarray. (Kadane's Algorithm)

const findmaxsubarray = (nums) => {
  let currentSum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    maxSum = Math.max(currentSum, maxSum);
    console.log(`currentSum: ${currentSum}, maxSum: ${maxSum}`);

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
};

const result = findmaxsubarray([1, 2, 3, -8, -5, 10]);

console.log(result);
