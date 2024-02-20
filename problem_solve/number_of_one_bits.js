var hammingWeight = function(n) {
    let bitMask = 1;
    let count = 0;
    console.log(n);

    for(let i = 0; i < 32; i++)
    {
        if(n & bitMask)
            count++;
        n >>= bitMask;
        console.log(n, count);
    }
    return count;
};

let ans = hammingWeight(11111111111111111111111111111101);
console.log(ans);