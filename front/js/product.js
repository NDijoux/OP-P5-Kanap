// Identification of the product via his id through URL ----------------------

let params = new URL(window.location.href);
let idProduct = params.searchParams.get("_id");
console.log(idProduct);


//  Data recovery from API & IdProduct ---------------------------------------------------

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
        for (let color of products.colors) {
          let colorOptn = document.createElement ("option");
          itemColors.appendChild(colorOptn);
          colorOptn.innerHTML = color;
          colorOptn.value = color;
        }
    })


// Function to create informations for local storage ---------------------------

let addCart = document.getElementById("addToCart");
addCart.addEventListener("click", function()  {
  let itemData = {
    id : idProduct,
    color : document.getElementById ("colors").value,
    quantity : parseInt(document.getElementById ("quantity").value),
   }

   let cart = JSON.parse(localStorage.getItem("itemForCart"));
  // Const to push element to cart ---------------------------------------------------
     const addLocalStorage = () => {
       cart.push(itemData);
       localStorage.setItem("itemForCart",JSON.stringify(cart));
     }

     /* if (cart) {
       addLocalStorage();
       }
       else {
       cart = [];
       addLocalStorage();
       } */

  // Function to create array in local storage & push first element
       if (cart == null) {
       cart = [];
       addLocalStorage();
      }
       else if (cart != null) {
        addLocalStorage();
  // Function to modify quantity for a same product (same id & color)
        for (i = 0; i < cart.lenght; i++) {
          if (
            cart[i].id == idProduct && 
            cart[i].color == document.getElementById ("colors").value 
            ) {
            return (
              cart[i].quantity++,
              localStorage.setItem("itemForCart",JSON.stringify(cart)),
              (cart = JSON.parse(localStorage.getItem("itemForCart")))
            )
          }
        }
      }
}) 

// for later : let itemLinea = JSON.stringify(itemJson);