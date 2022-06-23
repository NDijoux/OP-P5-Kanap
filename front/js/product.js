// Identification of the product via his id through URL ---------

let params = (new URL(document.location)).searchParams;
let idProduct = params.get("_id");
console.log(idProduct);


//  Data recovery from API --------------------------------------

fetch("http://localhost:3000/api/products")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then((products) =>{
      console.table(products);
      setOfProducts(products);
    })
    .catch((error) => {
      console.log(error);
    })

// Function to display product from API -------------------------

function setOfProducts(product) {
  let itemImg = document.getElementsByClassName ("item_img");
  itemImg.innerHTML = product.imageURL;
  let itemTitle = document.getElementById ("title");
  itemTitle.innerHTML = product.name;
  let itemPrice = document.getElementById ("price");
  itemPrice.innerHTML= product.price;
  let itemDescription = document.getElementById ("description");
  itemDescription.innerHTML = product.description;
  }

  

// Function to choose color -------------------------------------

// Function to choose quantity ----------------------------------

// Function to validate -----------------------------------------

