// const jsonValue = document.getElementById("demo");
// const text = '["Ford", "BMW", "Audi", "Fiat"]';
// const myArr = JSON.parse(text);
// console.log(myArr);
// jsonValue.innerHTML = myArr;


const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
obj.birth = new Date(obj.birth);

document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;