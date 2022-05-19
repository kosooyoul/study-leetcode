function threeSum(nums: number[]): number[][] {
    const results: number[][] = [];

    if (nums.length < 3) {
        return results;
    }

    let j: number;
    let k: number;
    let sum: number;
    
    nums.sort((a: number, b: number) => a - b);

    nums.forEach((num: number, i: number) => {
        if (num > 0) {
            return;
        }

        if (i > 0 && num == nums[i - 1]) {
            return;
        }

        j = i + 1;
        k = nums.length - 1;

        while (j < k) {
            sum = nums[i] + nums[j] + nums[k];

            if (sum == 0) {
                results.push([nums[i], nums[j], nums[k]]);
                
                while (nums[j] == nums[j + 1]) j++;
                while (nums[k] == nums[k - 1]) k--;

                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            }
        }
    });

    return results;
};