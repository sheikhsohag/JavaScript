const A = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const B = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function matrixsum(A, B)
{
     const C = []

     for(let i = 0; i < A.length; i++)
     {
        const res = []
        for(let j = 0; j<A[i].length; j++)
        res.push(A[i][j]+B[i][j]);
        C.push(res);
     }
    //  console.  log(C)
     return C;
} 

console.log(matrixsum(A,B));