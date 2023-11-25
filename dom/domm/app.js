// console.log('I have been loaded')

const title = document.getElementById('title') 
title.innerHTML = 'My Custom Title Changed By JavaScript'
console.log(title)
// console.dir(title)
// for show all element in inspact console
// element select by id 

const para = document.getElementsByClassName('para')
// console.log(para)

// class name use kore kaj kora usually it is not used
for(let v of para)
{
    // console.log(v);
     v.style.color = 'green'
}