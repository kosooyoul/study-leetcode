// 221ms, 48.6MB
const symbols: { [key: string]: number; } = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

function romanToInt(s: string): number {
    let result = 0;
    
    const len = s.length;
    
    for (let i = 0; i < len; i++) {
        result += symbols[s[i]] < symbols[s[i + 1]]? -symbols[s[i]]: symbols[s[i]];
    }

    return result;
};
