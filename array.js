// array lireral
// [] basic 

const arr = []
arr[0] = 10
arr[3] = 23
console.log(arr.length)
arr[0]=23

for(let i = 0; i<=3; i++)
console.log(arr[i])

// lastindex-1
// lastindex+1


// arr[arr.length] = 44

// constructor pattern
// const arr = new Array()  array declearation
//                       size
// const arr = new Array(5)

//                       initilize
// const arr = new Array(1,2,,3,4,5)


// factory pattern
// just new neglate


// constructor pattern
// const arr = Array()  array declearation
//                       size
// const arr =  Array(5)

//                       initilize
// const arr = Array(1,2,,3,4,5)


// factory pattern

// letarall pattern type of array declaration
// const arr = []



// cleck type
// console.log(arr.__proto__.constructor);

// console.log(arr.__proto__.constructor);


for(let i = 1;i<arr.length; i++)
{
    console.log(arr[i])
}

// arr.fill(0)  initialize

const res = new Array(9)
res.fill(false)

for( let i=0; i<res.length; i++)
{
    const rand = Math.floor(Math.random()*10 + 1);
    res[i] = rand > 5? 'x':'o';
}

console.log(res)


// array is mutable means it change anywhere it change in main array