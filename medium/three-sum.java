// The second submission -> 24ms, 58.3MB
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> results = new ArrayList<List<Integer>>();

        if (nums.length < 3) {
            return results;
        }

        int i, j, k, sum;

        Arrays.sort(nums);

        int len = nums.length;
        int num;
        for (i = 0; i < nums.length; i++) {
            num = nums[i];

            if (num > 0) {
                break;
            }

            if (i > 0 && num == nums[i - 1]) {
                continue;
            }

            j = i + 1;
            k = nums.length - 1;

            while (j < k) {
                sum = num + nums[j] + nums[k];

                if (sum == 0) {
                    results.add(Arrays.asList(num, nums[j], nums[k]));

                    while (j < len - 1 && nums[j] == nums[j + 1]) j++;
                    while (k > 1 && nums[k] == nums[k - 1]) k--;

                    j++;
                    k--;
                } else if (sum < 0) {
                    j++;
                } else if (sum > 0) {
                    k--;
                }
            }
        }

        return results;
    }
}