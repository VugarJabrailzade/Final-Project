const productContainer = document.querySelector(".wishlistProduct");

function getFromLocalStorage () {
    const products = localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []
    return products;
}

function render () {
    const products = getFromLocalStorage();

    products.forEach(product => {
        const card = document.createElement("div")
        const image = document.createElement("img")
        const title = document.createElement("a")
        const size = document.createElement("span")
        const price = document.createElement("span")
        const status = document.createElement("span")
        const removeItem = document.createElement("button")
    
        card.classList.add("productCart")
            
        //image
        image.src = product.img;
        image.classList.add("imgProduct")
        
        //title Name
        title.innerText = product.name;
        title.classList.add("productname")

        //size 
        size.innerText = product.size
        size.classList.add("productSize")

        // price
        price.innerText = `$${product.price}.00`

        //status
        status.classList.add("statusProduct")
        status.innerText = "In Stock"

        //remove 
        removeItem.innerHTML = "x"

        card.appendChild(image);
        card.appendChild(title)
        card.appendChild(size);
        card.appendChild(price);
        card.appendChild(status);
        card.appendChild(removeItem)

        productContainer.appendChild(card);
    })

}

render();