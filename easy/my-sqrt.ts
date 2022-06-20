// The first submission -> Wrong Answer, input 2147395600
function mySqrt(x: number): number {
    if (x == 1) {
        return 1;
    }
    
    var d = x >> 1;
    var v = d;
    var lv = v;
    var temp;
    while (d != 0) {
        temp = v * v;
        if (temp == x) {
            return v;
        }

        d = d >> 1;
        if (temp > x) {
            v = v - d;
        } else {
            lv = v;
            v = v + d;
        }
    }
    
    return lv;
};