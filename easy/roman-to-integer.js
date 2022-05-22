/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    // The first submission -> 232ms, 47.3MB
    var result = 0;
    
    var i = s.length - 1;
    do {
        if (s[i] === "M") {
            result += 1000;
            if (s[i - 1] === "C") {
                result -= 100;
                --i;
            }
        } else if (s[i] === "D") {
            result += 500;
            if (s[i - 1] === "C") {
                result -= 100;
                --i;
            }
        } else if (s[i] === "C") {
            result += 100;
            if (s[i - 1] === "X") {
                result -= 10;
                --i;
            }
        } else if (s[i] === "L") {
            result += 50;
            if (s[i - 1] === "X") {
                result -= 10;
                --i;
            }
        } else if (s[i] === "X") {
            result += 10;
            if (s[i - 1] === "I") {
                result -= 1;
                --i;
            }
        } else if (s[i] === "V") {
            result += 5;
            if (s[i - 1] === "I") {
                result -= 1;
                --i;
            }
        } else if (s[i] === "I") {
            result += 1;
        }
        
    } while(--i >= 0);

    return result;
};