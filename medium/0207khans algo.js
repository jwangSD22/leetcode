/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    // construct adjacency matrix [course] = [ prereqs ]
    // construct a matrix representations of number of indegrees for each course
    
    // go thru the list and add them to the queue

    // start while queue>0 loop 

    // deque item

    // decrease num courses by 1 -- as a representation of visiting this node

    // remove this node's connections

    // for course of adjmatr[current]

    // decrease their indegrees by 1 (removing the current node from their connection)

    // catch for any becoming 0 -> if the indegree === 0 {add it to the queue}

    let matrix = Array(numCourses).fill(0).map(()=>[])
    let indegrees = Array(numCourses).fill(0)

    for(let [course,prereq] of prerequisites){
        matrix[prereq].push(course)

        indegrees[course]+=1
    }




    let queue = []

    for(let course in indegrees){
        if(indegrees[course]===0){
            queue.push(course)
        }
    }


    while(queue.length>0){
        let current = queue.shift()
        numCourses-=1

        for(let course of matrix[current]){

            indegrees[course]-=1
            if(indegrees[course]===0){
                queue.push(course)
            }
        }

    }


    return numCourses===0

    
};

console.log(canFinish(2,[[1,0]]))