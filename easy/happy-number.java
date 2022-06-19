// The first submission => 5ms, 42.6mb
/*
class Solution {
    public boolean isHappy(int n) {
        Set<Integer> nums = new HashSet<Integer>();
        while(n != 1) {
            nums.add(n);
            n = this.nextNum(n);
            if (nums.contains(n)) {
                break;
            }
        }
        return n == 1;
    }
    
    private int nextNum(int n) {
        char[] nums = Integer.toString(n).toCharArray();
        int sum = 0;
        int num;
        for (int i = 0; i < nums.length; i++) {
            num = Integer.parseInt(String.valueOf(nums[i]));
            sum = sum + num * num;
        }
        return sum;
    }
}*/

// The second submission => 1ms, 39.9mb
class Solution {
    public boolean isHappy(int n) {
        Set<Integer> nums = new HashSet<Integer>();
        while(n != 1) {
            nums.add(n);
            n = this.nextNum(n);
            if (nums.contains(n)) {
                break;
            }
        }
        return n == 1;
    }
    
    private int nextNum(int n) {
        int sum = 0;
        int num;
        while(n > 0) {
            num = n % 10;
            sum = sum + num * num;
            n = n / 10;
        }
        return sum;
    }
}