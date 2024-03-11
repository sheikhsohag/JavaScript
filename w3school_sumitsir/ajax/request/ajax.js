function loadDoc() {

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
      console.log("Request");
      document.getElementById("demo").innerHTML = this.responseText;
      }

    xhttp.open("GET", "ajax.txt", false);
    
    xhttp.send();
    
    console.log("Hello");
  }