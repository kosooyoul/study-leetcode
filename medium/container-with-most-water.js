/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    // The first submission -> 173ms
    /*
    let l, r, a = 0;
    let h = 0;
    let len = height.length;
    let i;
    do {
        h++;

        l = r = -1;
        for (i = 0; i < len; i++) {
            if (height[i] >= h) {
                l = i;
                break;
            }
        }
        for (i = len - 1; i >= 0; i--) {
            if (height[i] >= h) {
                r = i;
                break;
            }
        }
        
        a = Math.max(a, (r - l) * h);
    } while (l < r);
    */

    // The second submission -> 90ms
    let l = 0, r = height.length - 1;
    let a = 0;
    while (l < r) {
        a = Math.max(a, Math.min(height[l], height[r]) * (r - l));
        height[l] <= height[r] ? l++ : r--;
    }
    
    return a;
};