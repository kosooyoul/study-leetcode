// 8ms, 44.9MB
class Solution {
    static HashMap<Character, Integer> symbols = new HashMap<Character, Integer>();
    static {
        symbols.put('I', 1);
        symbols.put('V', 5);
        symbols.put('X', 10);
        symbols.put('L', 50);
        symbols.put('C', 100);
        symbols.put('D', 500);
        symbols.put('M', 1000);
    }
    
    public int romanToInt(String s) {
        int result = 0;

        char[] charArr = s.toCharArray();

        int c = 0;
        int n = 0;
            
        int count = charArr.length - 1;
        for (int i = 0; i < count; i++) {
            c = symbols.getOrDefault(charArr[i], 0);
            n = symbols.getOrDefault(charArr[i + 1], 0);
            result += c < n? -c: c;
        }
        result += symbols.getOrDefault(charArr[count], 0);

        return result;
    }
}
