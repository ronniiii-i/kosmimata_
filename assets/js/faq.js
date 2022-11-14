const right =document.getElementsByClassName('fa-chevron-right');
const down =document.getElementsByClassName('fa-chevron-down');
const names =document.getElementsByClassName('title');
const main =document.getElementsByClassName('name');
const sub =document.getElementsByClassName('answer');
const sect =document.getElementsByClassName('answers');
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
console.log(location.href)

const locations = ['#jewelry', '#orders', '#shipping', '#payment', '#returns', '#etc']

// document.onload = sect[0].classList.add('show');

// (function(){
//     for (let i = 0; i < locations.length; i++) {
//         if (location.href.includes(locations[i])) {
//             sect[i].classList.add('show')
//         }       
//     }
//     console.log('hi')
// })
window.onload = function() {
    url = window.location.href
    for (let i = 0; i < locations.length; i++) {
        if (location.href.includes(locations[i])) {
            sect[i].classList.add('show')
        }       
    }
    console.log('hi')
}

for (let i = 0; i < locations.length; i++) {
    
    names[i].addEventListener('click', () => {
        if (location.href.includes(locations[i])) {
            for (var j=0; j < sect.length; j++) {
                if(j!==i) sect[j].classList.remove("show");
            }
            if (locations[i] == `#${sect[i].id}`) {
                sect[i].classList.add('show')
            }
        }
    })
    
}