// The second submission -> 0ms, 41.4mb
class Solution {
    public int searchInsert(int[] nums, int target) {
        int len = nums.length;
        int i = 0;
        while (i < len && target > nums[i]) i++;
        return i;
    }
}