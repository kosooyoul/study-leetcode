// The first submission -> 100ms, 42.7mb
function climbStairs(n: number): number {
    let result = 1;
    let lastResult = 1;
    let tempResult;
    for (let i = 1; i < n; i++) {
        tempResult = result;
        result = result + lastResult;
        lastResult = tempResult;
    }
    return result;
};

/*
1 => 1
2 => 2
3 => 3
4 => 5
5 => 8
6 => 13
7 => 21
8 => 34
9 => 55
==> Fibonacci Sequence
*/