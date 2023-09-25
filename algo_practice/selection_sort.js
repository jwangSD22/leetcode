//selection sort moves all the smallest numbers to the front of the array tracked by a var

const ss = (array) => {

    let i = 0 

    while(i<array.length-1){
        let lowest = Infinity
        let low
        for(let j = i; j<array.length; j++){
            if(array[j]<lowest){
                lowest = array[j]
                low = j
            }
        }
        
        [array[i],array[low]]=[array[low],array[i]]

        i++
    }

    return array

}

test = [87, 12, 45, 65, 32, 76, 90, 55, 23, 88, 71, 36, 58, 47, 29, 63, 10, 51, 19, 42, 78, 69, 84, 9, 97, 15, 67, 54, 31, 60, 37, 92, 48, 26, 75, 70, 18, 83, 8, 64, 93, 41, 57, 27, 59, 14, 72, 95, 66, 44, 30, 74, 22, 79, 34, 81, 7, 61, 20, 86, 35, 80, 68, 50, 85, 13, 52, 21, 89, 73, 33, 62, 94, 49, 24, 91, 40, 77, 25, 53, 16, 98, 38, 17, 56, 11, 96, 46, 28, 82, 43, 99, 6]


console.log(ss(test))