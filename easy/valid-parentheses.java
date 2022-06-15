// The third submission -> 2ms, 42.2mb
class Solution {
    public boolean isValid(String s) {
        char[] chars = s.toCharArray();
        int len = s.length();

        Stack<Character> temp = new Stack<Character>();
        for (int i = 0; i < len; i++) {
            char c = chars[i];

            if (c == '(' || c == '[' || c == '{') {
                temp.push(c);
                continue;
            }

            if (temp.empty()) {
                return false;
            }

            char last = temp.pop();

            if (c == ')' && last != '(') {
                return false;
            }
            if (c == ']' && last != '[') {
                return false;
            }
            if (c == '}' && last != '{') {
                return false;
            }
        }

        return temp.empty();
    }
}