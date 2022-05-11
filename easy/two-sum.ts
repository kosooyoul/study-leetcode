function twoSum(nums: number[], target: number): number[] {
    const v: {[key: number]: number;} = {};
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