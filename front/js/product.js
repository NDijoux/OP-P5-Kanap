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
      products.colors.forEach(element => {
        for (let color of products.colors) {
          let colorOptn = document.createElement ("option");
          itemColors.appendChild(colorOptn);
          colorOptn.innerHTML = color;
          colorOptn.value = color;
        }
      });
      // let colorOptn = document.createElement ("option");
     //  for (let color of products.colors) { 
     //   colorOptn.innerHTML = `<option value="${color}">${color}</option>`;
     //  } 
      // itemColors.appendChild(colorOptn);
    })


// Function to stock informations for local storage
let addCart = document.getElementById("addToCart");
addCart.addEventListener("click", function() {
  let itemJson = {
    id : idProduct,
    color : document.getElementById ("colors").value,
    quantity : parseInt(document.getElementById ("quantity").value),
   }
  let cart = JSON.parse(localStorage.getItem("itemForCart"));
  // push element to cart
  const test = () => {
    cart.push (itemJson);
    localStorage.setItem("itemForCart",JSON.stringify(cart));
  }
 // for later : let itemLinea = JSON.stringify(itemJson);
})
