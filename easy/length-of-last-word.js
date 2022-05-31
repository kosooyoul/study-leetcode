/**
 * @param {string} s
 * @return {number}
 */
// The first submission -> 65ms, 42.1mb
var lengthOfLastWord = function(s) {
    let count = s.length
    let result = 0
    
    while (count--) {
        if (s[count] != " ") {
            result += 1
        } else if (result > 0) {
            break
        } else {
            // skip
        }
        
    }
    
    return result
};
