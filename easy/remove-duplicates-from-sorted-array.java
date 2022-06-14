// The fourth submission -> 12ms, 48.7mb
class Solution {
    public int removeDuplicates(int[] nums) {
        Map<Integer, Boolean> used = new HashMap<Integer, Boolean>();
        int usedCount = 0;

        int len = nums.length;
        int p = 0;
        while (p < len) {
            if (used.containsKey(nums[p])) {
                nums[p] = Integer.MAX_VALUE;
            } else {
                used.put(nums[p], true);
                usedCount++;
            }
            p++;
        }

        for (int i = 0; i < usedCount; i++) {
            for (int j = i; j < len; j++) {
                if (nums[j] != Integer.MAX_VALUE) {
                    if (nums[i] != nums[j]) {
                        nums[i] = nums[j];
                        nums[j] = Integer.MAX_VALUE;
                    }
                    break;
                }
            }
        }

        return usedCount;
    }
}