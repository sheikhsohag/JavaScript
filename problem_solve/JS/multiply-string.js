
var multiply = function(num1, num2) {
    let n = num1.length, m = num2.length;
    let answer = new Array(n + m).fill(0);

    for(let i = n-1; i>=0; i--)
    {
        for(let j = m-1; j>=0; j--)
        {
            let pos1 = i + j;
            let pos2 = i + j + 1;
            let mul = Number(num1[i]) * Number(num2[j]) + Number(answer[pos2]);
            answer[pos2] = mul % 10;
            answer[pos1] += Math.floor(mul/10);
        }
    }

    while(answer[0]===0)
    answer.shift();

    return answer.length ? answer.join('') : '0';

};