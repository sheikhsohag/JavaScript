function temporary(){
    let counter = 0;

    return function(){
        counter += 1;
    }
}

let add = temporary();

add();
console.dir(add);
add();