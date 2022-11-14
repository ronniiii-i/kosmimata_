const shop =document.getElementById('shop');
const reshop =document.getElementById('reshop');
const search =document.getElementById('search');
const remove =document.getElementById('remove');
const cart =document.getElementById('cart');
const close =document.getElementById('close');
const leave =document.getElementById('leaveMenu');
const back =document.getElementById('back');
const ham =document.getElementById('ham');
var productNumber =document.querySelectorAll('.pNumber');
const shopSection =document.getElementById('shopSection');
const reshopSection =document.getElementById('reshopSection');
const namae =document.getElementsByClassName('namae');
const l1 =document.querySelectorAll('.pam .line1');
const shopshow =document.getElementsByClassName('shopshow');
const searchSection =document.getElementById('searchSection');
const cartSection =document.getElementById('newBody');
const resMenu =document.getElementById('menuBack');
const Menu =document.getElementById('resMenu');
const icons =document.getElementsByTagName('i');

// for (let i = 0; i < icons.length; i++) {
//     const element = icons[i];

//     if (element.style.width == 0) {
//         element.innerHTML = `i`;
//     } else{
//         element.innerHTML = ``;
//     }
//     console.log(element.innerHTML);
    
// }
shop.addEventListener('mouseover', () => {
    shopSection.classList.add('visible');
    searchSection.classList.remove('visible');
});
shopSection.addEventListener('mouseleave', () => {
    shopSection.classList.remove('visible');
});
search.addEventListener('click', () => {
    shopSection.classList.remove('visible');
    searchSection.classList.toggle('visible');
});

remove.addEventListener('click', () => {
    searchSection.classList.remove('visible');
});

cart.addEventListener('click', () => {
    cartSection.classList.remove('no');
    cartSection.classList.add('show');
})
close.addEventListener('click', () => {
    cartSection.classList.add('no');
    cartSection.classList.remove('show');
})

ham.addEventListener('click', () => {
    resMenu.classList.remove('no');
    resMenu.classList.add('show');
})
leave.addEventListener('click', () => {
    resMenu.classList.add('no');
    resMenu.classList.remove('show');
});
reshop.addEventListener('click', () => {
    reshopSection.classList.add('show');
    Menu.classList.add('no');
});

function increase() {
    var num = productNumber.value
    num++;
    console.log(num);
    productNumber.value = num;
}
function reduce() {
    productNumber.forEach(element => {
        var num = element.value
        num--;
        console.log(num);
        console.log(productNumber.values);
        element.value = num;
    })
}

back.addEventListener('click', () => {
    reshopSection.classList.remove('show');
    Menu.classList.remove('no');
})
for (let i = 0; i < namae.length; i++) {
    namae[i].addEventListener('click', () => {
        shopshow[i].classList.toggle('show')
        l1[i].classList.toggle('min')
    })
    
}