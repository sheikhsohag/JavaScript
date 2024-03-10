let w;

function startWorker() {
  if(typeof(w) == "undefined") {
    w = new Worker("demo.js");
  }

  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}