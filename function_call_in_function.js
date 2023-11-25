function returnIsEven(){
    const isEven = (n) => n%2==0;
    return isEven
}

const isEven = returnIsEven();
console.log(isEven(501));

// same as above

console.log(returnIsEven()(992));


// child can use parent properties but patent can't use child properties..
// global variable used by internal functin but internal variable can't use by the external's 