fetch("http://localhost:3000/api/products")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(products) {
      products.forEach (product =>{
        let items = document.getElementById ("items");
        let article = document.createElement ("article");
        let img = document.createElement ("img");
        let alt = document.createElement ("alt")
        img.innerHTML = product.imageUrl;
        alt.innerHTML = product.altTxt;
        let h3 = document.createElement ("h3");
        h3.classList.add("productName");
        h3.innerHTML = product.name;
        let p = document.createElement ("p");
        p.classList.add("productDescription");
        p.innerHTML = product.description;
        items.appendChild(article);
        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(alt);
        article.appendChild(p);

      })
    })
    
  