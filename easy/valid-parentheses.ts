// The first submission -> 97ms, 44.7MB
/*
function isValid(s: string): boolean {
    const temp = []
    let t
    for (const c of s) {
        if (c == "(" || c == "[" || c == "{") {
            temp.push(c)
            continue
        }
        t = temp.pop()
        if (c == ")" && t != "(") {
            return false
        }
        if (c == "]" && t != "[") {
            return false
        }
        if (c == "}" && t != "{") {
            return false
        }
    }
    return temp.length == 0
};
*/

// The second submission -> 74ms, 44.3MB
const closerParenthesesMap = {
    ")": "(",
    "]": "[",
    "}": "{",
}

const opernerParentheses = ["(", "[", "{"];

function isValid(s: string): boolean {
    const temp = []
    for (const c of s) {
        if (opernerParentheses.includes(c)) {
            temp.push(c)
            continue
        }
        if (temp.pop() != closerParenthesesMap[c]) {
            return false
        }
    }
    return temp.length == 0
};