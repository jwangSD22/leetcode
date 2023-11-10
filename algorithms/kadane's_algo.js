// It's a dynamic programming approach that efficiently computes the maximum subarray sum without the need for nested loops.

function kadanesAlgorithm(nums) {
    let maxEndingHere = nums[0];
    let maxSoFar = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      // Update the maximum subarray sum ending at the current index
      maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
  
      // Update the maximum subarray sum seen so far
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
  
    return maxSoFar;
  }
  
  // Example usage:
  const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const maxSubarraySum = kadanesAlgorithm(array);
  console.log("Maximum Subarray Sum:", maxSubarraySum);

//   Let's break down the code:

// Initialization:

// maxEndingHere: Represents the maximum subarray sum ending at the current index.
// maxSoFar: Represents the maximum subarray sum seen so far.
// Loop through the array:

// Start the loop from index 1 (since the initialization takes care of the first element).
// For each element at index i, calculate the maximum subarray sum ending at index i by comparing the current element (nums[i]) and the sum of the maximum subarray ending at the previous index and the current element (maxEndingHere + nums[i]).
// Update maxEndingHere with the calculated value.
// Update maxSoFar with the maximum value between maxSoFar and maxEndingHere.
// Result:

// The final value of maxSoFar represents the maximum subarray sum in the given array.
// Kadane's algorithm is efficient with a time complexity of O(n), where n is the size of the input array. It's a simple and elegant solution for finding the maximum subarray sum and is widely used in various applications.