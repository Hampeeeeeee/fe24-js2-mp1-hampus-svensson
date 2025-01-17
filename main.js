import { getProducts } from "./modules/API.js";


getProducts().then(products => {
    console.log(products)
});

async function fetchAndLogProducts() {
    const products = await getProducts();

    const container = document.getElementById('productContainer');

    // Här loopar du igenom alla instanser av Product-klassen
    products.forEach(product => {
        product.displayInfo();
        
        
        const productCard = product.productCard();  
        container.appendChild(productCard);
        
    });    

}

fetchAndLogProducts();

// Två alternativ utifrån det du har här
// 1. Lämna klassen som den är. Där du loopar igenom alla instanser av klassen, skapar du alla element för product Cards och lägger till eventlistener
// 2. Lägg till en metod i Product-klassen för att skapa alla element till product card samt lägga till eventlistener. Och anropa den metoden en gång på varje instans, dvs där du loopar igenom dem. 