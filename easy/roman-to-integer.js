/**
 * @param {string} s
 * @return {number}
 */
// The third submission -> 192ms, 46.7MB
var symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {
    let result = 0;
    let i;
    const len = s.length;
    
    for (i = 0; i < len; i++) {
        result += symbols[s[i]] < symbols[s[i + 1]]? -symbols[s[i]]: symbols[s[i]];
    }

    return result;
};