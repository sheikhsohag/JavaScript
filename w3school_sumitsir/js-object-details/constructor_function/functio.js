function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;

    this.fullname = function()
    {
        return this.firstName + ' ' + this.lastName
    }
}

const sohag = new Person("sohag", "ali", 25);
console.log(sohag.fullname());

document.getElementById("demo").innerText = sohag.fullname();