// const status = false;

// console.log('Task 1');

// // promise defination.
// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         if(status){
//             resolve('Task 2');
//         }
//         else{
//             reject('Failed');
//         }
//     }, 2000);
// });

// // promise call

// promise 
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(err){
//         console.log(err);
//     })

// console.log("Test 3");

let paymentSuccess = false;
let mark = 80;

function Enroll(){
    console.log("Payment processing...");

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentSuccess)
            {
                resolve();
            }
            else{
                reject("Payment unsuccessfull!");
            }
        },2000)
    })
    return promise;
}

function process(){
    console.log("Cource Processing...");

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(mark>=80)
            {
                resolve();
            }
            else{
                reject("Not Enough Mark!");
            }
        }, 3000)
    })
    return promise;
}

function getChartificate(){
    console.log("Preparing Your Chartificate!");

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("congrats! You got the certificate");
        })
    }, 2000);
   return promise;
}


Enroll()
        .then(process)
        .then(getChartificate)
        .then(function(value){
            console.log(value);
        })
        .catch(function(err){
            console.log(err);
        })