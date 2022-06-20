// The second submission -> 0ms, 40.8mb
class Solution {
    public int climbStairs(int n) {
        int result = 1;
        int lastResult = 1;
        int tempResult;
        for (int i = 1; i < n; i++) {
            tempResult = result;
            result = result + lastResult;
            lastResult = tempResult;
        }
        return result;
    }
}