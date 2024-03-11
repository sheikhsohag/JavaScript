function loadDoc() {

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      console.log(this.getAllResponseHeaders());
      console.log(this.getResponseHeader('vary'));
      // this is some meta data...
      }
    
// by default it is true, means async if you provide false the it will be 
// sync

    xhttp.open("GET", "ajax.txt");
    
    xhttp.send();

  }