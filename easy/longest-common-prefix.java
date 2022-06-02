// The second submission -> 1ms, 41.5mb
class Solution {
    public String longestCommonPrefix(String[] strs) {
        int len = strs.length;
        if (len == 0) {
            return "";
        }
        if (len == 1) {
            return strs[0];
        }
        
        int max = strs[0].length();
        
        int i, j;
        char c;
        for (i = 0; i < max; i++) {
            c = strs[0].charAt(i);
            for (j = 1; j < len; j++) {
                if (i >= strs[j].length() || c != strs[j].charAt(i)) {
                    return strs[0].substring(0, i);
                }
            }
        }
        
        return strs[0];
    }
}