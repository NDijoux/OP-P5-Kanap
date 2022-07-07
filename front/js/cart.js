// Data recovery from API & Localstorage ---------------------------

let cartData = JSON.parse(localStorage.getItem("itemForCart"));

fetch("http://localhost:3000/api/products/")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
// Function to display the Cart & the Products in it -------------------
    .then (function (cartProducts){
        let cartSection = document.querySelector("#cart__items");
        cartSection.innerHTML = 
        `<article class="cart__item" data-id="${cartProducts._id}" data-color="${cartProducts.color}"></article>`;
        let cartImg = document.createElement ("div");
        cartImg.classList.add('cart__item__img');
        cartSection.appendChild(cartImg)
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
        cartItemColor.innerHTML = cartProducts.color; 
        cartDescription.appendChild(cartItemColor);
        let cartItemPrice = document.createElement ("p");
        cartItemPrice.innerHTML = cartProducts.price;
        cartDescription.appendChild(cartItemPrice);
        let cartSettings = document.createElement ("div");
        cartSettings.classList.add('cart__item__content__settings');
        cartContent.appendChild(cartSettings);

// Function to manage quantity --------------------------------------------------------------------

        /* let cartQuantity = document.createElement ("div");
        cartQuantity.classList.add('cart__item__content__settings__quantity');
        cartSettings.appendChild(cartQuantity);
        let cartQuantityTxt = document.createElement ("p");
        cartQuantityTxt.innerHTML = 
        `Qté : ${cartProducts.quantity}`;
        cartQuantity.appendChild(cartQuantityTxt);
        let cartQuantityInput = document.createElement ("input");
        cartQuantityInput.type = "number";
        cartQuantityInput.className = "itemQuantity";
        cartQuantityInput.name = "itemQuantity";
        cartQuantity.min = "1";
        cartQuantityInput.max = "100";
        cartQuantityInput.value = "42";
        cartQuantity.appendChild(cartQuantityInput);

// Function to delete product -----------------------------------------------------------------------

        let cartDelete = document.createElement ("div");
        cartDelete.classList.add("cart__item__content__settings__delete");
        cartSettings.appendChild(cartDelete);
        let cartDeleteTxt = document.createElement ("p");
        cartDeleteTxt.classList.add("deleteItem");
        cartDeleteTxt.textContent = "Supprimer";
        cartDelete.appendChild(cartDeleteTxt); */
// Function to calculate and display total quantity
// Function to calculate and display total price
    })