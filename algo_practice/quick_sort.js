const qs1 = (array) => {

    if(array.length<=1){
        return array
    }

    let left = []
    let equal = []
    let right = []

    let pivot = array[array.length-1]

    for(let i = 0 ;i<array.length;i++){
        if(array[i]<pivot){
            left.push(array[i])
        }
        else if (array[i]>pivot){
            right.push(array[i])
        }
        else{
            equal.push(array[i])
        }
    }

    return [...qs(left),...equal,...qs(right)]
    

}

function qs2(array,l,r){

    if(l<r){
        let p = partition(array,l,r)
        qs2(array,l,p-1)
        qs2(array,p+1,r)

        
        }
        
    return array

  

}

function partition(array,l,r){

    let pivot = array[r]
    

    let i = l - 1

    for(let j = l;j<r;j++){

        if(array[j]<=pivot){
            i++         
            [array[i],array[j]]=[array[j],array[i]]
        }
    }

    [array[i+1],array[r]]=[array[r],array[i+1]]

    return i+1


}





test = [87, 12, 45, 65, 32, 76, 90, 55, 23, 88, 71, 36, 58, 47, 29, 63, 10, 51, 19, 42, 78, 69, 84, 9, 97, 15, 67, 54, 31, 60, 37, 92, 48, 26, 75, 70, 18, 83, 8, 64, 93, 41, 57, 27, 59, 14, 72, 95, 66, 44, 30, 74, 22, 79, 34, 81, 7, 61, 20, 86, 35, 80, 68, 50, 85, 13, 52, 21, 89, 73, 33, 62, 94, 49, 24, 91, 40, 77, 25, 53, 16, 98, 38, 17, 56, 11, 96, 46, 28, 82, 43, 99, 6]


console.log(qs2(test,0,test.length-1))



