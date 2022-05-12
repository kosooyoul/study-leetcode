func isPalindrome(x int) bool {
    if x < 0 {
        return false
    }

    if x < 10 {
        return true
    }

    // The first submission -> 20ms
    rev := 0
    for i := x; i >= 1; i = i / 10 {
        rev = rev * 10 + i % 10
    }
    
    // The second submission -> 37ms
    /*
    tmp := x
    rev := 0
    for tmp != 0 {
        rev = rev * 10 + tmp % 10
        tmp /= 10
    }
    */

    return rev == x
}