const display = document.getElementById("display");

// function myFunction(){
//     fetch("http://127.0.0.1:5500/fetch/fetch.txt")
//         .then(res => res.text())
//         .then((data) => 
//         {
//             console.log("hello1");
//             display.innerHTML = data;
//         })
// }

// console.log("hello");


// ==================================async await===============


async function myFunction(){
    const res = await fetch("http://127.0.0.1:5500/fetch/fetch.txt");
    const data = await res.text();

    display.innerHTML = data;
}

