// 349 INTERSECTION OF TWO ARRAYS

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let intersection = function(nums1,nums2){

    let output = new Set()

    let main = new Set(nums1)

    for(let value of nums2){
        if(main.has(value)){
            output.add(value)
        }
    }

    let final = []
    for(let entry of output){
final.push(entry)
    }

    return final


}




// var intersection = function(nums1, nums2) {

//     let output = []
//     let hash = {}
//     let smaller
//     let bigger 

//     if(nums1.length>nums2.length){
//         smaller = nums2
//         bigger = nums1
//     }
//     else{
//         smaller = nums1
//         bigger = nums2
//     }


//     for(let i = 0;i<smaller.length;i++){

//         hash[smaller[i]] = null
//     }

//     for(let value of bigger){
//         if (hash[value]===null){
//             hash[value]=true
//         }
//     }

//     for(let value in hash){
//         if(hash[value]===true){
//             output.push(Number(value))
//         }
//     }


//     return output
    
// };


