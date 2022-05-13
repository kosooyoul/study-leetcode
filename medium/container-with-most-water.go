func maxArea(height []int) int {
    // The first submission -> 99ms
    l := 0;
    r := len(height) - 1;
    max := 0;
    curr := 0;

    for l < r {
        if height[l] < height[r] {
            curr = height[l] * (r - l);
            l++;
        } else {
            curr = height[r] * (r - l);
            r--;
        }
        if curr > max {
            max = curr;
        }
    }

    return max;
}