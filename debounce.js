/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled - 10ms
 * log('Hello'); // cancelled - 20 ms
 * log('Hello'); // Logged at t=100ms
 */
