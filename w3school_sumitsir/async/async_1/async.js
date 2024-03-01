// console.log("Line 1 code ");
// setTimeout(function(){
//     console.log("Line 2 code ");
// },1);
// console.log("Line 3 code ");

// ==========================================================

let peymentSuccessFull = true;

let mark = 87;

function enrollment(callback){
    console.log("enrollment is in progress...");

    setTimeout(function(){
         if(peymentSuccessFull){
            callback();
         }
         else{
            console.log("Payment Failed!");
         }
    }, 2000);
}

function progress(callback){
     console.log("Cource on Progress...");
     if(mark>=80)
     { 
        callback();
     }
     else{
        console.log("You can't obtain enough mark to chertificate!");
     }
}

function Chertificate(){
    console.log("Congrass For you great achivement!");
}

enrollment(function(){
    progress(Chertificate);
});

