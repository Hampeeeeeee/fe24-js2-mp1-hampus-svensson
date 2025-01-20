import { getProducts } from "./modules/API.js";
import { filterByCategory } from "./modules/Filter.js";
import { filterByPrice } from "./modules/Filter.js";

getProducts().then(products => {
    console.log(products)
    initializeDropdown(products);
    renderProducts(products);
});

async function fetchAndLogProducts() {
    const products = await getProducts();
    renderProducts(products);
}

function initializeDropdown(products) {
    const categoryDropdown = document.getElementById('categoryFilter')
    const priceDropdown = document.getElementById('priceFilter');

    categoryDropdown.addEventListener('change', () => {
        const selectedCategory = categoryDropdown.value;
        const selectedPrice = priceDropdown.value;

        console.log('Selected category:', selectedCategory);
        console.log('Selected price:', selectedPrice);

        const filteredProducts = filterByCategory(products, selectedCategory);
        console.log('Filtered Products:', filteredProducts);
        renderProducts(filteredProducts);
    });

    priceDropdown.addEventListener('change', () => {
        const selectedCategory = categoryDropdown.value;
        const selectedPrice = priceDropdown.value;

        console.log('Selected Category:', selectedCategory);
        console.log('Selected Price:', selectedPrice);

        const filteredByCategory = filterByCategory(products, selectedCategory);
        const filteredByPrice = filterByPrice(filteredByCategory, selectedPrice);
        console.log('Filtered Products:', filteredByPrice);
        renderProducts(filteredByPrice);
    });
}

function renderProducts(products) {
    const container = document.getElementById('productContainer');
    container.innerHTML = '';

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