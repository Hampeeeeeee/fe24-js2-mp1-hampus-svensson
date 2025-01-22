// klass för product med alla variablar som behövs.
export class Product {
    #title;
    #imageUrl;
    stock;
    price;
    #discountPercentage;
    category;
    rating;

    constructor(title, imageUrl, stock, price, discountPercentage, category, rating) {
        this.#title = title;
        this.#imageUrl = imageUrl;
        this.stock = stock;
        this.price = price;
        this.#discountPercentage = discountPercentage;
        this.category = category;
        this.rating = rating;
    }

    // funktion som loggar alla variablar.
    displayInfo() {
        console.log(`Name: ${this.#title} - ${this.#imageUrl} - Amount: ${this.stock} - Price: $${this.price} - 
                    Discount: ${this.#discountPercentage}% - Category: ${this.category} - Rating: ${this.rating}`);
    }

    // funktion som räknar ut det rabatterade priset.
    discountedPrice() {
        return (this.price * (1 - this.#discountPercentage / 100)).toFixed(2);
    }

    // funktion som uppdaterar lagersaldot.
    updatePurse() {
        this.stock -= 1;

        if (this.stock <= 0) {
            this.stock = 0;
        }
    }

    // funktion som skapar ett produktkort och sedan returnerar det.
    productCard() {
        const productCard = document.createElement('div');
        productCard.classList.add('card');

        const title = document.createElement('h3');
        title.innerText = this.#title;

        const img = document.createElement('img');
        img.src = this.#imageUrl;
        img.alt = `Image of ${this.#title}`;
        
        const stock = document.createElement('p');
        stock.innerHTML = `<b>Stock: ${this.stock}</b>`;
        
        const discountedPrice = document.createElement('p');
        discountedPrice.innerHTML = `<i>Price: $${this.discountedPrice()}</i>`;
        
        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = "Add to Cart";
        addToCartBtn.addEventListener('click', () => {
            this.updatePurse();
            stock.innerHTML = `<b>Stock: ${this.stock}</b>`;
        });
        productCard.append(title, img, stock, discountedPrice, addToCartBtn);
    
        return productCard;
    }
}

