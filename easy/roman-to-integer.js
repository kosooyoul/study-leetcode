/**
 * @param {string} s
 * @return {number}
 */
// The first submission -> 224ms, 52.5MB
var romanToInt = function(s) {
    var result = 0;
    
    var i = 0;
    
    while (s[i] === "M") {
        result += 1000;
        i++;
    }

    if (s[i] === "C" && s[i + 1] === "M") {
        result += 900;
        i += 2;
    }
    
    while (s[i] === "D") {
        result += 500;
        i++;
    }

    if (s[i] === "C" && s[i + 1] === "D") {
        result += 400;
        i += 2;
    }
    
    while (s[i] === "C") {
        result += 100;
        i++;
    }
    
    if (s[i] === "X" && s[i + 1] === "C") {
        result += 90;
        i += 2;
    }
    
    while (s[i] === "L") {
        result += 50;
        i++;
    }

    if (s[i] === "X" && s[i + 1] === "L") {
        result += 40;
        i += 2;
    }
    
    while (s[i] === "X") {
        result += 10;
        i++;
    }

    if (s[i] === "I" && s[i + 1] === "X") {
        result += 9;
        i += 2;
    }
    
    while (s[i] === "V") {
        result += 5;
        i++;
    }

    if (s[i] === "I" && s[i + 1] === "V") {
        result += 4;
        i += 2;
    }

    while (s[i] === "I") {
        result += 1;
        i++;
    }

    return result;
};