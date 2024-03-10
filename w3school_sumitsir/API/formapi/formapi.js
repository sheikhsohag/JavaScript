function myFunction(){
    const inputObj = document.getElementById("id1");
    if(inputObj.validity.rangeOverflow){
        document.getElementById("demo").innerHTML = "Range Overflow";
    }
    else{
        document.getElementById("demo").innerHTML = "valide Number";
    }
}