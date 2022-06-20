// The first submission -> 0ms, 42.9mb
class Solution {
    public int[] plusOne(int[] digits) {
        // Not to affect the original
        int[] result = new int[digits.length];
        System.arraycopy(digits, 0, result, 0, digits.length);

        boolean up = true;
        int i = result.length - 1;
        while(i >= 0) {
            if (up == false) {
                break;
            }
            if (result[i] == 9) {
                result[i] = 0;
            } else {
                result[i]++;
                up = false;
            }
            i--;
        }
        
        if (up) {
            int[] extendedResult = new int[result.length + 1];
            System.arraycopy(result, 0, extendedResult, 1, result.length);
            extendedResult[0] = 1;
            result = extendedResult;
        }
        
        return result;
    }
}