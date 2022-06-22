class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        std::map<int, int> m;
        std::vector<int> v;

        int i = 0;
        for (int num : nums) {
            // Check 1. (m.contains(target - num)) -> error
            // Check 2. (m.find(target - num) != m.end()) -> 26ms
            // Check 3. (m.count(target - num)) -> 16ms
            if (m.find(target - num) != m.end()) {
                return {m[target - num], i};
            } else {
                m.insert(pair(num, i));
            }
            i++;
        }
        return v;
    }
};