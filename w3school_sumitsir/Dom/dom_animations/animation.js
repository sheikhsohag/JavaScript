function myMove(){
    const elemt = document.getElementById("animate");
    const elem = document.getElementById("animate1");
    let id = null;
    clearInterval(id);
    id = setInterval(frame,5);
    let pos = 0;
    let px1 = 0;
    let py1 = 0;


    function frame(){
         if(pos === 300)
         {
            clearInterval(id);
         }
         else{
            pos++;
            elemt.style.top = pos + 'px';
            elemt.style.left = pos + 'px';
            
            // px1 = px1 + 2;
            // py1 = py1 + 2;
            // elem.style.top = px1 + 'px';
            // elem.style.left = py1 + 'px';
         }
    }
}

myMove();