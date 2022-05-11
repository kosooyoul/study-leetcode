/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // The first submission
    /*
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
    */
    
    // The second submission
    /*
    let v
    for (var i = 0; i < nums.length; i++) {
        v = nums.indexOf(target - nums[i], i + 1)
        if (v != -1) {
            return [i, v] 
        }
    }
    */
    
    // The third submissio
    // REF: https://leetcode.com/problems/two-sum/discuss/2018256/1.Two-Sum-JS
    let v = {};
    let num
    for(let i = 0; i < nums.length; i++) {
        num = nums[i]
        if (target - num in v) {
            return [v[target - num], i]
        } else {
            v[num] = i
        }
    }

    return []
};