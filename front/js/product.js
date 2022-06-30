// Identification of the product via his id through URL ----------------------

let params = new URL(window.location.href);
let idProduct = params.searchParams.get("_id");
console.log(idProduct);


//  Data recovery from API ---------------------------------------------------

fetch("http://localhost:3000/api/products/"+idProduct)
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
// Function to display product from API -------------------------------------- 
    .then(function (products) {
      let itemImg = document.querySelector("article div.item__img");
      let img = document.createElement ("img");
      img.src = products.imageUrl;
      img.alt = products.altTxt;
      let itemTitle = document.getElementById ("title");
      itemTitle.innerHTML = products.name;
      let itemPrice = document.getElementById ("price");
      itemPrice.innerHTML = products.price;
      let itemDescription = document.getElementById ("description");
      itemDescription.innerHTML = products.description;
      itemImg.appendChild(img);
// Function to choose color ---------------------------------------------------
      let itemColors = document.getElementById ("colors");
      let colorOptn = document.createElement ("option");
      for (let color of products.colors) { 
        colorOptn.innerHTML = `<option value="${color}">${color}</option>`;
      }
      itemColors.appendChild(colorOptn);
    })


// Function to stock informations for local storage
document.getElementById("addToCart").onclick = function() {itemStorage(localStorage)};

function itemStorage(localStorage) {
 let itemJson = {
   id : idProduct,
  }
 let itemLinea = JSON.stringify(itemJson);
 localStorage.setItem("itemForCart",itemLinea);
}