/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    // The first submission -> 323ms
    /*
    let str = x.toString();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }
    }
    */
    
    // The second submission -> 185ms
    /*
    let str = x.toString();
    for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
        if (str[i] != str[j]) {
            return false;
        }
    }
    */
    
    // The third submission -> 152ms
    if (x < 0) return false;

    let rev = 0;
    for (let i = x; i >= 1; i = Math.floor(i / 10)) {
        rev = rev * 10 + i % 10;
    }

    return rev === x;
};