// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

fruits.set("apples", 400);

console.log(fruits);
console.log("=========");
console.log((fruits.get("apples"))); 

console.log(fruits.size);

fruits.forEach( function( Values, key){
    console.log(Values, key)
} )

fruits.set("apples", fruits.get("apples")+6);

fruits.forEach(function(value, key){
    console.log(value, key);
})