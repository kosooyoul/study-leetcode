// The third submission -> 0ms, 40.4mb 
class Solution {
    public int lengthOfLastWord(String s) {
        char[] charArr = s.toCharArray();
        
        int count = charArr.length;
        int result = 0;

        while (count-- > 0) {
            if (charArr[count] != ' ') {
                result++;
            } else if (result > 0) {
                return result;
            }
        }

        return result;
    }
}
