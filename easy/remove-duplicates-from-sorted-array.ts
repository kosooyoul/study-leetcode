// The first submission -> Wrong
function removeDuplicates(nums: number[]): number {
    let len = nums.length;
    let p = 1;
    let temp;
    while (p < len) {
        if (nums[p] > nums[p - 1]) {
            p++;
        } else if (nums[p] < nums[p - 1]) {
            temp = nums[p];
            nums[p] = nums[p - 1];
            nums[p - 1] = temp;
        } else {
            if (p + 1 < len) {
                temp = nums[p];
                nums[p] = nums[p + 1];
                nums[p + 1] = temp;
            }
            len--;
        }
    }
    return len;
};