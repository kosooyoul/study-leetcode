function hammingWeight(n: number): number {
    let sum = 0;
    for (let i = 0; i < 32; i++) {
        sum += (n % 2 == 0)? 0: 1;
        n = n >> 1;
    }
    return sum;
};
