function multiplier(t)
{
    return function(n){
        return n*t;
    }
}


const mul=multiplier(5);
console.log(mul(10));
console.log(mul(4))

// here function multiplier(5) run one times but worker multiple time.. so it should be store it in memory so it called closure....