function sum(a)
{
    const isOdd = (n) => n%2 != 0;
    const isEven = (n) => n%2==0;

    for(let i=1; i<=a; i++)
    {
        if(isOdd(i))
        console.log('Table Row Odd - ', i)
        else
        console.log('Table Row Ever', i)
    }
}

const summation = sum
// function variable
summation(4) 