// function submitForm(event) {
//     event.preventDefault();

//     var data = new FormData(event.target);
//     const value = Object.fromEntries(data.entries());

//     value.category = data.get("category");
//     tab1.innerHTML = value.category;

//     value.type = data.get("type");
//     tab2.innerHTML = value.type;

//     value.productName = data.get("prodname");
//     tab3.innerHTML = value.productName;

//     value.heroImg = data.get("heroimg");
//     value.secondImg = data.get("secondimg");
//     value.price = data.get("price");
//     value.otherImgs = data.getAll("otherImgs");
//     value.materials = data.getAll("materials").toString();

//     console.log(value.category);
//     console.log(value);
    
//     runTab1Check(); 
//     runTab2Check(); 
//     runTab3Check();
//     categoryCheck();
// }

// form.addEventListener('submit', submitForm);
