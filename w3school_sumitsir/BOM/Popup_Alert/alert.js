function popup(){
    let txt;
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      }
    document.getElementById("height").innerHTML = txt;
}


function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("width").innerHTML = text;
  }

function alertBox(){
    console.log("yes");
    window.alert("I am an alert box!");
  }