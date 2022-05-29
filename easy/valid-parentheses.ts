function isValid(s: string): boolean {
    // The first submission -> 97ms, 44.7MB
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