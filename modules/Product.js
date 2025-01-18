export class Product {
    #title;
    #imageUrl;
    stock;
    #price;
    #discountPercentage;
    #category;
    #rating;

    constructor(title, imageUrl, stock, price, discountPercentage, category, rating) {
        this.#title = title;
        this.#imageUrl = imageUrl;
        this.stock = stock;
        this.#price = price;
        this.#discountPercentage = discountPercentage;
        this.#category = category;
        this.#rating = rating;
    }

    displayInfo() {
        console.log(`Name: ${this.#title} - ${this.#imageUrl} - Amount: ${this.stock} - Price: $${this.#price} - 
                    Discount: ${this.#discountPercentage}% - Category: ${this.#category} - Rating: ${this.#rating}`);
    }

    discountedPrice() {
        return (this.#price * (1 - this.#discountPercentage / 100)).toFixed(2);
    }

    updatePurse() {
        this.stock -= 1;

        if (this.stock <= 0) {
            this.stock = 0;
        }
    }

    productCard() {
        const productCard = document.createElement('div');
        productCard.classList.add('card');

        // Skapa ett namn för produkten
        const title = document.createElement('h3');
        title.innerText = this.#title;

        const img = document.createElement('img');
        img.src = this.#imageUrl;
        img.alt = `Image of ${this.#title}`;
        
        // Skapa ett lagersaldo
        const stock = document.createElement('p');
        stock.innerText = `Stock: ${this.stock}`;
        
        // Skapa ett pris för produkten
        const discountedPrice = document.createElement('p');
        discountedPrice.innerText = `Price: $${this.discountedPrice()}`;
        
        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = "Add to Cart";
        addToCartBtn.addEventListener('click', () => {
            this.updatePurse();
            stock.innerText = `Stock: ${this.stock}`;
        });
        productCard.append(title, img, stock, discountedPrice, addToCartBtn);
    
        // Returnera kortet så det kan läggas till i DOM senare
        return productCard;
    }
}

