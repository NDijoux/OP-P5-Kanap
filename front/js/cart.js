// Data recovery from API & Localstorage ---------------------------

let cartData = JSON.parse(localStorage.getItem("itemForCart"));
function displayCart () {
  for (let kanap of cartData) {
    let retrieveDataItems = 
    {
    id : kanap.id,
    color : kanap.color,
    quantity : kanap.quantity,
    }
   fetch("http://localhost:3000/api/products/"+retrieveDataItems.id)
    .then(function(res) {
        if (res.ok) {
        return res.json();
      }
    })
// Function to display the Cart & the Products in it -------------------
    .then (function (cartProducts){
        let cartSection = document.querySelector("#cart__items");
        let article = document.createElement ("article");
        cartSection.appendChild(article);
        article.classList.add('cart__item');
        article.setAttribute('data-id',retrieveDataItems.id);
        article.setAttribute('data-color',retrieveDataItems.color);
        let cartImg = document.createElement ("div");
        cartImg.classList.add('cart__item__img');
        cartSection.appendChild(cartImg);
        let img = document.createElement ("img");
        img.src = cartProducts.imageUrl;
        img.alt = cartProducts.altTxt;
        cartImg.appendChild(img);
        let cartContent = document.createElement ("div");
        cartContent.classList.add('cart__item__content');
        cartSection.appendChild(cartContent);
        let cartDescription = document.createElement ("div");
        cartDescription.classList.add('cart__item__content__description');
        cartContent.appendChild(cartDescription);
        let cartItemName = document.createElement ("h2");
        cartItemName.innerHTML = cartProducts.name;
        cartDescription.appendChild(cartItemName);
        let cartItemColor = document.createElement ("p");
        cartItemColor.innerHTML = retrieveDataItems.color; 
        cartDescription.appendChild(cartItemColor);
        let cartItemPrice = document.createElement ("p");
        cartItemPrice.innerHTML = cartProducts.price;
        cartDescription.appendChild(cartItemPrice);
        let cartSettings = document.createElement ("div");
        cartSettings.classList.add('cart__item__content__settings');
        cartContent.appendChild(cartSettings);
        let cartQuantity = document.createElement ("div");
        cartQuantity.classList.add('cart__item__content__settings__quantity');
        cartSettings.appendChild(cartQuantity);
        let cartQuantityTxt = document.createElement ("p");
        cartQuantityTxt.textContent = "Qté :";
        cartQuantity.appendChild(cartQuantityTxt);
        let cartQuantityInput = document.createElement ("input");
        cartQuantityInput.type = "number";
        cartQuantityInput.className = "itemQuantity";
        cartQuantityInput.name = "itemQuantity";
        cartQuantityInput.min = "1";
        cartQuantityInput.max = "100";
        cartQuantityInput.value = retrieveDataItems.quantity
        cartQuantity.appendChild(cartQuantityInput);
        let cartDelete = document.createElement ("div");
        cartDelete.classList.add("cart__item__content__settings__delete");
        cartSettings.appendChild(cartDelete);
        let cartDeleteTxt = document.createElement ("p");
        cartDeleteTxt.classList.add("deleteItem");
        cartDeleteTxt.textContent = "Supprimer";
        cartDelete.appendChild(cartDeleteTxt);
    })
   }
  }
    displayCart();

// Function to manage quantity --------------------------------------------------------------------
// même methode que la page produit + un parametre + bien penser à appeler les éléments dans des variables

let itemQuantityManagement = document.querySelector(".itemQuantity");
itemQuantityManagement.addEventListener("change", function() {
  let editableData = retrieveDataItems;

    const modifyLocalStorage = () => {
    cartData.push(editableData);
    localStorage.setItem("itemForCart",JSON.stringify(cartData));
    }

      if (cartData) {
        let testQuantity = cartData.find(n => n.id == editableData.id && n.color == editableData.color);
        if (testQuantity) {
          let adjustedQuantity = testQuantity.quantity+editableData.quantity;
          testQuantity.quantity = adjustedQuantity;
          localStorage.setItem("itemForCart", JSON.stringify(cartData));
        }
        else {
          modifyLocalStorage();
        }
      }
        else {
        modifyLocalStorage();
        }
})

// Function to delete product -----------------------------------------------------------------------
let deleteProduct = document.getElementsByClassName("deleteItem");
deleteProduct.addEventListener("click", function(o) {
  o.preventDefault ();
  // let filtered = cartData.filer(m => m.id )
// même methode mais avec filter et on se pose la question du et/ou + un parametre à mettre en default
}
)
// Function to calculate and display total quantity
// Function to calculate and display total price --> se poser la question de quand le faire ? A chaque actualisation (suppression ou modifier la quantité) --> création d'une fonction en dehors (reload) qui actualise la page 
