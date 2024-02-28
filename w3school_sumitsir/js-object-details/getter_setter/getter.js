// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "En",
//     get lang() {
//       return this.language;
//     }
//   };
  
//   // Set an object property using a setter:
 
  
//   // Display data from the object:
//   document.getElementById("demo").innerHTML = person.lang;

//   =============Setter================================


const person = {
    firstName: "John",
    lastName: "Doe",
    language: "En",
    set lang(lang) {
      this.language = lang;
    }
  };
  
  // Set an object property using a setter:
  person.lang = "Bn";
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = person.language;