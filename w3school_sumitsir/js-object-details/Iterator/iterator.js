// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}



for(let num of myNumbers)
{
    console.log(num);
}

// =================================================

// let array = [1,2,3];
// let numIterator = array[Symbol.iterator]();
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());