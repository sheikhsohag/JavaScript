// const letters = new Set(["a","b","c"]);

// console.log(letters)

// =====================

const st = new Set();


st.add('s');
st.add(3);

st.add(3);

console.log(st);

st.forEach(myfunction);

function myfunction(value)
{
    console.log(value);
}

st.forEach(function(value){
    console.log(value);
});


for(const x of st.values())
{
    console.log(x);
}