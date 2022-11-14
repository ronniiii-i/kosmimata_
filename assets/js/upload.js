const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/qaz2dc/upload';
const CLOUDINARY_UPLOAD_PRESET = 'ysrxbbce';

const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const screens = document.getElementsByClassName('screen');
const earrings = document.getElementById('earrings');
const rings = document.getElementById('rings');
const necklace = document.getElementById('necklaces');
const bracelets = document.getElementById('bracelets');
const men = document.getElementById('men');
const more = document.getElementById('addquest');
const hero = document.getElementById('heroimg');
const newCon = document.querySelector('.extra');
const next = document.getElementsByClassName('nextPage');
const prev = document.getElementsByClassName('previousPage');

const form = document.forms[0];
const preview = document.getElementById('preview');
const pName = document.getElementById('pName');
const pCat = document.getElementById('pCat');
const pType = document.getElementById('pType');
const pPrice = document.getElementById('pPrice');
const pMainMaterial = document.getElementById('pMainMaterial');
const pOtherMaterials = document.getElementById('pOtherMaterials');
const pStyles = document.getElementById('pStyles');
const pLength = document.getElementById('pLength');
const pPri = document.getElementById('pri');
const pSec = document.getElementById('sec');


more.addEventListener('click', () => {
    newCon.classList.toggle('show')
})


// console.log(earrings)

function categoryCheck() {
    if (tab1.innerHTML == 'Earrings') {
        earrings.style.display = 'flex';
        rings.style.display = 'none';
        necklace.style.display = 'none';
        bracelets.style.display = 'none';
        men.style.display = 'none';
        console.log('gone')
    }else if (tab1.innerHTML == 'Rings') {
        rings.style.display = 'flex';
        earrings.style.display = 'none';
        necklace.style.display = 'none';
        bracelets.style.display = 'none';
        men.style.display = 'none';
    }else if (tab1.innerHTML == 'Necklaces') {
        necklace.style.display = 'flex';
        earrings.style.display = 'none';
        rings.style.display = 'none';
        bracelets.style.display = 'none';
        men.style.display = 'none';
    }else if (tab1.innerHTML == 'Bracelets') {
        bracelets.style.display = 'flex';
        earrings.style.display = 'none';
        necklace.style.display = 'none';
        rings.style.display = 'none';
        men.style.display = 'none';
    }
}
function runTab1Check() {
    if (tab1.innerHTML == 'Hello' || tab1.innerHTML == '') {
        tab1.style.display = 'none';
    } else{
        tab1.style.display = 'block'
    }
}
function runTab2Check() {
    if (tab2.innerHTML == 'Hello' || tab2.innerHTML == undefined || tab2.innerHTML == '' ) {
        tab2.style.display = 'none';
    } else{
        tab2.style.display = 'block'
    }
}
function runTab3Check() {
    if (tab3.innerHTML == 'Hello' || tab3.innerHTML == undefined || tab3.innerHTML == '' ) {
        tab3.style.display = 'none';
    } else{
        tab3.style.display = 'block'
    }
}

window.onload = function () {
    screens[0].classList.add('go');
    runTab1Check(); runTab2Check(); runTab3Check();
}

function page1() {
    screens[0].classList.add('go');
    screens[1].classList.remove('go');
    tab1.innerHTML = "Hello"
    runTab1Check()
}
function page2() {
    if (screens[0].classList.contains('go')) {
        screens[0].classList.remove('go');
        screens[1].classList.add('go')
        getCategory();
    } else {
        screens[2].classList.remove('go');
        screens[1].classList.add('go');
        tab2.innerHTML = "Hello";
        runTab2Check()
    }
    console.log('hi');
    runTab1Check();
}
function page3() {
    if (screens[1].classList.contains('go')) {
        screens[1].classList.remove('go');
        screens[2].classList.add('go')
        getType()
        uploadToCloud()
    } else {
        screens[3].classList.remove('go');
        screens[2].classList.add('go');
        tab3.innerHTML = "Hello";
        runTab3Check()
    }
    runTab2Check();
}
function page4() {
    screens[3].classList.add('go');
    screens[2].classList.remove('go');
    getName();
    runTab3Check(); 
}
function nextdisabled() {
    function category() {
        var categories = document.getElementsByName('category');  
        for (var category of categories) {  
          if (category.checked)  
            screens[0].querySelector('input[type="button"]').removeAttribute('disabled')
        } 
    }
    function type() {
        var types = document.getElementsByName('type');  
        for (var type of types) {  
          if (type.checked)  
          screens[1].querySelector('input[type="button"]').removeAttribute('disabled') 
        }  
    }
    function details() {
        var name = document.getElementById('prodname').value;
        var price = document.getElementById('price').value;
        var heroImg = document.getElementById('heroimg').value;
        var secImg = document.getElementById('secondimg').value;
        if (name !== '' && price !== '' && heroImg !== "" && secImg !== '') {
            screens[2].querySelector('input[type="button"]').removeAttribute('disabled')
        }
    }
    function mmat() {
        var mainMats = document.getElementsByName('mainMaterial');  
        for (var mainMat of mainMats) {  
          if (mainMat.checked)              
            screens[3].querySelector('input[type="button"]').removeAttribute('disabled')
        }  
    }

    category();
    type();
    details();
    mmat();
    console.log(heroImg);
}
for (let i = 0; i < screens.length; i++) {
    screens[i].addEventListener('click', nextdisabled)
}
function getCategory() {
    var categories = document.getElementsByName('category');  
    for (var category of categories) {  
      if (category.checked)  
        tab1.innerHTML = category.value;  
        console.log('howdy');
    }  
    categoryCheck()
}
function getType() {
    var types = document.getElementsByName('type');  
    for (var type of types) {  
      if (type.checked)  
        tab2.innerHTML = type.value;  
        console.log('howdy2');
    }  
    categoryCheck()
}
function getMainMaterial() {
    var mainMats = document.getElementsByName('mainMaterial');  
    for (var mainMat of mainMats) {  
      if (mainMat.checked)  
      pMainMaterial.innerHTML = mainMat.value;
    }  
    categoryCheck()
}
function getOtherMaterial() {
    var otherMats = document.querySelectorAll('input[name="materials"]:checked'); 
    const arr = []
    for (let i = 0; i < otherMats.length; i++) {
        arr.push(otherMats[i].value) 
    }
    pOtherMaterials.innerHTML = arr.toLocaleString().replaceAll(',', ', ') ;
    // categoryCheck()
}
function getStyles() {
    var styles = document.querySelectorAll('option:checked'); 
    const arr = []
    for (let i = 0; i < styles.length; i++) {
        arr.push(styles[i].value) 
    }
    pStyles.innerHTML = arr.toLocaleString().replaceAll(',', ', ');
}
function uploadToCloud() { 
}
function getName() {
    tab3.innerHTML = document.getElementById('prodname').value
}
function details() {
    pName.innerHTML = tab3.innerHTML;
    pCat.innerHTML = tab1.innerHTML;
    pType.innerHTML = tab2.innerHTML
    pPrice.innerHTML = document.getElementById('price').value
    pLength.innerHTML = document.getElementById('length').value
    getMainMaterial();
    getOtherMaterial();
    getStyles();
}
function showDeets() {
    preview.style.opacity = '1';
    preview.style.zIndex = '6';
    details();
    productObject();
    uploadToCloud();
}
function closeDeets() {
    preview.style.opacity = '0';
    preview.style.zIndex = '-1';
}
function productObject() {
    const othMats = [...document.querySelectorAll('input[name="materials"]:checked').values()]
    const arr = []
    for (let i = 0; i < othMats.length; i++) {
        arr.push(othMats[i].value)
        
    }
    var styles = document.querySelectorAll('option:checked'); 
    const arr2 = []
    for (let i = 0; i < styles.length; i++) {
        arr2.push(styles[i].value) 
    }
    const prodDeets = {
        Name : pName.innerHTML,
        slug : pName.innerHTML.toLowerCase().replaceAll(' ', '-'),
        Category : pCat.innerHTML,
        Type : pType.innerHTML,
        Price : pPrice.innerHTML,
        mainMaterial : pMainMaterial.innerHTML,
        otherMaterials : arr,
        date : new Date().toString(),
        heroImg : '',
        secImg : '',
        otherImgs : [],
        others: {
            style: arr2,
            length : pLength.innerHTML,
        }
    };
    console.log(prodDeets);
}

hero.addEventListener('change', function(event){
    var file = event.target.files[0];
    // console.log(file);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        data: {
            file,
        }
    })
})