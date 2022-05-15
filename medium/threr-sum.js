/**
 * @param {number[]} nums
 * @return {number[][]}
 */
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
