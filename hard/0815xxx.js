// 815 BUS ROUTES

// need to rethink this and create an adjacency list first and then do BFS


/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {

    const containStartingLocation = []

    for (let busNumber in routes){
        for (let uniqueRoute of routes[busNumber]){
            if(uniqueRoute === source){
                containStartingLocation.push(busNumber)
            }
        }
    }

    if(source===target){
        return 0
    }

    for(let bus of containStartingLocation){
        if (routes[bus].includes(target)){
            return 1
        }
    }

    const locationsTraversed = containStartingLocation.map(x=>traverse(x,target,routes,count=1,visited={}))


    for(let value of locationsTraversed){
        if(value!=-1){
            break
        }
        else{
            return -1
        }
    }


    return Math.min(...locationsTraversed)

    
};

const traverse = function(source,target,routes,count=1,visited = {}){

    


    //basecase - 
    if(routes[source].includes(target)){
        
        return count
    }

    visited[source] = true


    let queue = []
    let minNewCount = Infinity

    for(uniqueRoute of routes[source]){
        //check all of the other routes to see which busses contain the same route
        //add to queue if it isn't a bus that has already been visited

        for(let bus in routes){
        if(visited[bus]===undefined){    
            for(let busRoutes of routes[bus]){
                
                if(busRoutes === uniqueRoute && !visited[bus]){
                    queue.push(bus)
                }
            }
        }
        }

    }

    for(let bus of queue){
        const newCount = traverse(bus,target,routes,count+1,visited)
        if(newCount !== -1){
            minNewCount = Math.min(minNewCount,newCount)
        }
    }

    return minNewCount !== Infinity? minNewCount: -1





}

