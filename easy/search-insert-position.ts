// The first submission -> 108ms, 44.2mb
function searchInsert(nums: number[], target: number): number {
    const len = nums.length;
    let i = 0;
    while (i < len && target > nums[i]) i++;
    return i;
};