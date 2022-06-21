// The third submission -> 0ms, 2.0mb
func climbStairs(n int) int {
    result := 1;
    lastResult := 1;
    tempResult := 0;
    for i := 1; i < n; i++ {
        tempResult = result;
        result = result + lastResult;
        lastResult = tempResult;
    }
    return result;
}