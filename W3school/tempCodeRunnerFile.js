const res = new Array(9)
res.fill(false)

for( let i=0; i<res.length; i++)
{
    const rand = Math.floor(Math.random()*10 + 1);
    res[i] = rand > 5? 'x':'o';
}

console.log(res)