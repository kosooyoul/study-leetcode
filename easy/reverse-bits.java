// The first submission => 1ms, 42.5mb
public class Solution {
    // you need treat n as an unsigned value
    public int reverseBits(int n) {
        boolean invert = n < 0;
        if (invert) {
            n = ~n;
        }
        int result = 0;
        for (int i = 0; i < 32; i++) {
            result = (result << 1) + (n % 2);
            n = n >> 1;
        }
        return invert? ~result: result;
    }
}