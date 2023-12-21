// this is actually a problem of an increasing monotonic stack

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {

    let cars = []

    for(let i = 0  ; i < position.length; i ++){
        cars.push([position[i],speed[i]])
    }

    cars.sort((a,b)=>b[0]-a[0])




    cars = cars.map(a=>(target-a[0])/a[1])

    let stack = [cars[0]]

    console.log(cars)

    for(let i = 1 ; i<cars.length;i++){

        let top = stack[stack.length-1]

        if(stack&&cars[i]<=top){
            continue
        }
        stack.push(cars[i])  

        
    }

    console.log(stack)

    return stack.length

};


position = [10,8,0,5,3]

speed = [2,4,1,1,3]

console.log(carFleet(12,position,speed))
