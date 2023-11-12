// Solution 1:
// Time: O(n)
// Space: O(1)
// We can use the total sum property to work out the missing number:


// def missingNumber(self, nums: List[int]) -> int:
//   n = len(nums)
//   return ((n * (n+1)) // 2 ) - sum(nums) # Get sum of complete series(Gaussian formula) and find the difference between sum of given series
       
// Intution:

// The Gaussian formula(above) is used to work out the sum of a series given the length.

// The reason we find the difference can be hightlighted by the following example

// completeSeries = [1,2,3,4,5,6] (sum = 21)
// givenNumsList =  [1,2,3, ,5,6] (sum = 17)

