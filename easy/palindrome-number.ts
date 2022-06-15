// The first submission -> 189ms, 51mb
/*
function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    let rev = 0;
    for (let i = x; i >= 1; i = Math.floor(i / 10)) {
        rev = rev * 10 + i % 10;
    }

    return rev === x;
};
*/

// The second submission -> 127ms, 45.7mb
/*
function isPalindrome(s: string): boolean {
    let front = 0;
    let rear = s.length - 1;
    
    while (front < rear) {
        while ((s[front] < 'a' || s[front] > 'z') && (s[front] < 'A' || s[front] > 'Z') && (s[front] < '0' || s[front] > '9')) front++;
        while ((s[rear] < 'a' || s[rear] > 'z') && (s[rear] < 'A' || s[rear] > 'Z') && (s[rear] < '0' || s[rear] > '9')) rear--;
        
        if (front < rear) {
            if (s[front].toLowerCase() != s[rear].toLowerCase()) {
                return false;
            }
        }
        
        front++;
        rear--;
    };
    
    return true;
};
*/

// The third submission -> 112ms, 45.0mb
function isPalindrome(s: string): boolean {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let front = 0;
    let rear = str.length - 1;
    
    while (front < rear) {
        if (str[front++] != str[rear--]) {
            return false;
        }
    };
    
    return true;
};