const numbers = [30,40,5, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
    console.log(x);
  txt += numbers[x];
}

console.log(txt);
console.log(typeof txt);

for(let num of numbers)
{
    console.log(num)
}