window.onload = function()
{
    main();
}


// function main()
// {
//     // alert('Hello World');
//     let times = 0;
//     const btn = document.getElementById('click-btn');
//     btn.onclick = function()
//     {
//         alert('Clicked ' + times++)
//     };
// }
// called back functi0n
// event handle general function use kora valo  

// other way 

// function main()
// {
//     const btn = document.getElementById('click-btn');
//     let times = 0;
//     btn.addEventListener('click', function(e){
//         console.log(e);
//         alert('Clicked ' + times++);
//     })
// }


// change element using button.\

function main()
{
    const btn = document.getElementById('click-btn');
    const title = document.getElementById('title');

    let current_text = title.innerText;
    let next_title =  'Change Dom Element';

    btn.addEventListener('click', function(e){
      title.innerText = next_title;

      let temp = current_text
      current_text = next_title
      next_title=temp 

    //   if(title.classList.contains('title1'))
    //   {
    //     title.classList.remove('title1');
    //     title.classList.add('title2');
    //   }
    //   else
    //   {
    //     title.classList.remove('title2');
    //     title.classList.add('title1');
    //   }

    // same above

    title.classList.toggle('title1');
    title.classList.toggle('title2');


    })
}


// text current input show 7:40:00 pore r likhsina
// Dom create form frontend and create li element
// attribute create 7:50

