let button = document.getElementById("myBtn");
console.log(button);

button.addEventListener("click", function(){
    let val = document.getElementById("demo").innerHTML = Date();
    alert("hello world");
}, true);

document.getElementById("btn").addEventListener("click", function(){
    alert("Hello Div");
}, true);

// bubbling and Capturing..  
// all of those work when we set listener inner element.. 
{/* <div id="btn">
    <p id="mybth"></p>
</div> */}

// here work if set listener with p element then div word but if set div does not effect on p
