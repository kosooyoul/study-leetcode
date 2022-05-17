/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// The first submission -> Wrong Answer ... threeSum([0, 0])
/*
var threeSum = function(nums) {
    let result = [];
    nums.forEach((num, idx) => {
        let r = twoSum(nums, -num, idx);
        if (!r) return;
        r = [num, ... r].sort();
        for (let i = 0; i < result.length; i++) {
            if (result[i][0] == r[0] && result[i][1] == r[1] && result[i][2] == r[2]) {
                return;
            }
        }
        result.push(r);
    });
    return result;
};

var twoSum = function(nums, target, offset) {
    let v = {};
    let num;
    for(let i = 0; i < nums.length; i++) {
        num = nums[i];
        if (target - num in v && v[target - num] != offset) {
            return [target - num, num];
        } else {
            v[num] = i;
        }
    }
    return null;
};
*/

// The second submission -> 10463ms, 81.6MB
/*
var threeSum = function(nums) {
    let results = [];

    let v = {};
    nums.forEach((num, idx) => {
        v[num] = idx;
    });
    
    nums.forEach((num, idx) => {
        let t = -num;
        let n;
        let r;
        for(let i = 0; i < nums.length; i++) {
            if (i == idx) {
                continue;
            }
            n = nums[i];
            if (t - n in v && v[t - n] != idx && v[t - n] != i) {
                r = [-t, t - n, n].sort();
                if (results.find(result => result[0] == r[0] && result[1] == r[1] && result[2] == r[2]) == null) {
                    results.push(r);
                }
            }
        }
    });

    return results;
};
*/

// The third submission -> 1520ms, 69.9MB
var threeSum = function(nums) {
    let results = [];

    let v = {};
    let r;
    let j;
    let n;
    
    nums.sort();

    nums.forEach((num, i) => {
        v[num] = i;
    });

    nums.forEach((num, i) => {
        if (num > 0) {
            return;
        }

        if (i > 0 && num == nums[i - 1]) {
            return;
        }
        
        for(j = i + 1; j < nums.length; j++) {
            n = -num - nums[j];
            if (n in v && v[n] != i && v[n] != j) {
                // TODO: How to check duplicate?
                r = [num, n, nums[j]].sort();
                if (results.find(result => result[0] == r[0] && result[1] == r[1] && result[2] == r[2]) == null) {
                    results.push(r);
                }
            }
        }
    });

    return results;
};