/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let counter = 0
    let zerocounter = 0
    for(let i = 0;i<flowerbed.length;i++){
        if(flowerbed[i]===1){
            counter+=helper(zerocounter)
            zerocounter=0
        }
        else{
            zerocounter++
        }
    }


    function helper(n){
        if(n<=2){
            return 0
        }

        return helper(n-2)+1
    }

    return counter===n
};

flowerbed =
[1,0,0,0,1]
n=1

console.log(canPlaceFlowers(flowerbed,n))