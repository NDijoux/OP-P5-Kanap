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

  

// Function to choose color -------------------------------------

// Function to choose quantity ----------------------------------

// Function to validate -----------------------------------------

