class Solution {
    public boolean isPalindrome(int x) {
        // 13ms, 44mb
        if (x < 0) return false;

        int rev = 0;
        for (int i = x; i >= 1; i = i / 10) {
            rev = rev * 10 + i % 10;
        }

        return rev == x;
    }
}