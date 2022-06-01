// The second submission -> 89ms, 42.7mb
function lengthOfLastWord(s: string): number {
    let count: number = s.length
    let result: number = 0
    
    while (count--) {
        if (s[count] != " ") {
            result += 1
        } else if (result > 0) {
            break
        }
    }
    
    return result
};