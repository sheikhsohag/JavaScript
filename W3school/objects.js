// const c = {}
// // {} variable ar sathe {} thakle object hoi.
// console.log(typeof c) 

const person1 = {}

person1.firstname = "sohag";
person1.lastname = "ali";
person1.email = "sohag@gmail.com";

// console.log(person1)


const person2 = {
    firstname: 'sohag',
    lastname: 'ali',
    email: 'sohag@gmail.com'
}

person2.id = '1234';
// extends object
  
delete person2.id;
// for   delete items

const val = "email"
// consol e.log(person2[val])
// we can use above line when key is variable.

// console.log(person2.email)

// console.log(person2)


// =============================================

// array of Object

const person = [
    {
        firstname: 'sohag',
        lastname: 'ali',
        email: 'sohag@gmail.com'
    },
    {
        firstname: 'sohag',
        lastname: 'ali',
        email: 'sohag@gmail.com'
    },
    {
        firstname: 'sohag',
        lastname: 'ali',
        email: 'sohag@gmail.com'
    }
]

// console.log(person)

for(let p of person){
    console.log(`${p.firstname} (${p.email})`);
}


