function longestCommonPrefix(strs: string[]): string {
    // The third submission -> could not test (leetcode down, maintenance)
    const len: number = strs.length;
    
    if (len == 0) {
        return "";
    }
    
    if (len == 1) {
        return strs[0];
    }

    const max = strs[0].length;

    let i: number;
    let j: number;
    let c: string;

    for (i = 0; i < max; i++) {
        c = strs[0][i];
        for (j = 1; j < len; j++) {
            if (c != strs[j][i]) {
                return strs[0].substr(0, i);
            }
        }
    }
    
    return strs[0];
};