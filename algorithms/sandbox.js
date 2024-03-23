function merge(arr1,arr2){
    let final = []
    let i = 0
    let j = 0
    while(i<arr1.length&&j<arr2.length){
        if(arr1[i]>arr2[j]){
            final.push(arr1[i])
                i++
        }
        else{
            final.push(arr2[j])
                j++
            
        }
    }
    return final.concat(arr1.slice(i),arr2.slice(j))
}

function ms(array){
    if(array.length<=1){
        return array
    }

    let mid = array.length>>1
    let left = ms(array.slice(0,mid))
    let right = ms(array.slice(mid))

    return merge(left,right)
}


let array = [3,6,7,9,1,2,4,10]

console.log(ms(array))