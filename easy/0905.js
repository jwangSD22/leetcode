//905 sort by parity

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortArrayByParity = function(nums) {

//     let spliced =  []

//     for(let i = nums.length-1;i>=0;i--){

//         if(nums[i]%2!==0){
//             spliced.push(nums.splice(i,1))
//         }

//     }

//     return nums.concat(spliced)

// };

//this solution is not good because spliced will increase time complexity because it needs to reorder the array everytime

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortArrayByParity = function (nums) {
//   let even = [];
//   let odd = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       even.push(nums[i]);
//     } else {
//       odd.push(nums[i]);
//     }
//   }

//   return even.concat(odd);

//   //this is faster but is an issue with memory consumption with the addn of even and odd array fields
// };


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {

    //index of the last item in array
    let j = nums.length - 1

    for (let i = 0; i < j; i++) {

        if(nums[i]%2!==0){
            [nums[i],nums[j]]=[nums[j],nums[i]]
            i--
            j--
        }


    }
  
    return nums
  
  };
