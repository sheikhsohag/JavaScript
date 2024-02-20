// const arr = [1,3,5,6]

// let sum = 0;

// arr.forEach((v) => {
//     console.log(v)
// })


function toUpper(str, callback)
{
    const upper = str.toUpperCase();
    callback(upper)
}

toUpper('stack learner', (str) => {
    console.log('hello', str)
})
