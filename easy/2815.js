//2815 MAX PAIR SUM IN AN ARRAY


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {

    //create a hash table of numbers 0-9 that will represent the maximum digit in the number, each initilaized with an empty array
    
    //analyze each number in nums -- make it a string. then split it, then check which number is greater
    // once you find the greater number, you can put it into the respective array in the hash table
    
    //loop throuhg the hash table to see if all of the arrays lengths are <=1. If it finishes the loop,
    //that means there are no pairs, and you can return - 1
    
    //otherwise, we're loop throuhg the hash table, 
    // if the length of the array is 2 or more, then we will sort the array 
    // and check if the sum of the last two numbers is greater than a global max 
    
    //in the end, return the global max 
    
    let hash = {}
    let globalMax = 0
    
    for (let i = 0;i<10;i++){
        hash[i]=[]
    }
    
    for (let i = 0;i<nums.length;i++){
        origin = nums[i]
        string = origin.toString().split('').sort()
        highest = Number(string[string.length-1])
        hash[highest].push(Number(origin))
    }

    
    let counter = 0

    for (let i = 0;i<10;i++){
        if(hash[i].length>1){
            counter +=1
        }

    }

    if(counter===0){
        return -1
    }
    
    for (let i = 0;i<10;i++){
        if(hash[i].length>1){
            let sorted = hash[i].sort((a,b)=>a-b) 


            let last1 = sorted[sorted.length-1]
            let last2 = sorted[sorted.length-2]
            let sum = Number(last1)+Number(last2)
    
            if(sum>globalMax){
    
                globalMax = sum
            }
    
        }
    }
    
    return globalMax

        
    };


console.log(maxSum([84,91,18,59,27,9,81,33,17,58]

    ))


