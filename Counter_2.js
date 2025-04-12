/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function(init) {
//     const n = init
//    return {
//         increment(){
//            return init += 1
//         },
//         decrement(){
//             return init -= 1
//         },
//         reset(){
//             return init = n
//         }
//     }
//     // return obj
// };

var createCounter = function(init) {
    const n = init
   
       function increment(){
           return init += 1
        }
       function decrement(){
            return init -= 1
        }
       function reset(){
            return init = n
        }
    return {
        increment , decrement , reset
    }
    // return obj
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
