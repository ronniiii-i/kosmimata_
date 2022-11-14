const right =document.getElementsByClassName('fa-chevron-right');
const down =document.getElementsByClassName('fa-chevron-down');
const main =document.getElementsByClassName('name');
const sub =document.getElementsByClassName('sub');
const cat = document.getElementById('name');

// cat.addEventListener('click', () => {
//     right.classList.toggle('viewr');
//     down.classList.toggle('viewd');
//     // sub.classList.toggle('show');

//     console.log(sub)
// });

for (let i = 0; i < main.length; i++) {
    main[i].addEventListener('click', () => {
        sub[i].classList.toggle('show');
        right[i].classList.toggle('viewr');
        down[i].classList.toggle('viewd');
    })
}