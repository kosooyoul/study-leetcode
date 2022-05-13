class Solution {
    fun maxArea(height: IntArray): Int {
        // The first submission -> 620ms
        var l = 0;
        var r = height.size - 1;
        var max = 0;
        var curr = 0;

        while (l < r) {
            if (height[l] < height[r]) {
                curr = height[l] * (r - l);
                l++;
            } else {
                curr = height[r] * (r - l);
                r--;
            }
            if (curr > max) {
                max = curr;
            }
        }

        return max;
    }
}