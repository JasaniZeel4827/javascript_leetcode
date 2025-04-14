/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(func) {
    let cache = {}
    return function (...args) {
        // let n = args[0]
        let n = JSON.stringify(args)
        if (n in cache) {
            return cache[n]
        } else {
            // let result = func(n)
            let result = func.apply(this , args)
            cache[n] = result
            return result
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
