function loadDoc(callbackf) {

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function(){
        callbackf(this);
    }

    xhttp.open("GET", "http.txt");
    
    xhttp.send();
  }

  function myCallback1(xhttp){
    console.log(xhttp.responseText);
    const container = document.getElementById("demo");
    container.innerHTML = xhttp.responseText; 
  }


function myCallback2(xhttp){
    const container = document.getElementById("demo1");
    container.innerHTML = xhttp.responseText;
    
  }