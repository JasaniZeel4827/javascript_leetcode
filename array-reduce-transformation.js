/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let total = init
    for(let i =0; i <nums.length; i++){
        total = fn(total , nums[i])
    }
    return total
};
