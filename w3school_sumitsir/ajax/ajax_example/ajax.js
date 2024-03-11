function sendRequest(method, url, data){
    const promise = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.onload = function(){
            //handle application error

            if(this.status>=400)
            {
                reject(`There was an application error and the 
                response status is ${this.status}`);
            }
            else{
            resolve(this.response);
            }
        }

        xhr.onerror = function(){
            reject("there are occur some errors!");
        }
    
        xhr.open(method, url);
    
        xhr.responseType = "json";
    
        xhr.send();
    })

    return promise;
}

function getData(){
    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/one").then(
        (responseData) => {
            console.log(responseData);
        }
        )
        .catch((err) =>{
            console.log(err);
        });
};


function sendData(){

    sendRequest("POST", "https://jsonplaceholder.typicode.com/post",
    (JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }))).then(
            (responseData) => {
                console.log(responseData);
            }
        )
        .catch((err) =>{
            console.log(err);
        })
}

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send")


getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);