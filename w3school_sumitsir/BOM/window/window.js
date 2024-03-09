let height = document.getElementById("height");
let width = document.getElementById("width");

height.innerHTML = "browser inner window heigth " + window.innerHeight + " px<br>" + 
"Browser inner window width " + window.innerWidth + " px";

let mywindow;

function myFunction(){
    console.log("yes");
    mywindow = window.open("https://www.w3schools.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=400,height=400");
}

function closeFunction(){
    mywindow.close();
}
