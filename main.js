import { getProducts } from "./modules/API.js";
import { filterByCategory, filterByPrice, sortByPrice, sortByRating } from "./modules/Filter.js";

getProducts().then(products => {
    console.log(products)
    filterDropdown(products);
    displayProducts(products);
});

async function fetchAndLogProducts() {
    const products = await getProducts();
    displayProducts(products);
}

function filterDropdown(products) {
    const filterCategoryDropdown = document.getElementById('categoryFilter')
    const filterPriceDowndown = document.getElementById('priceFilter');
    const sortPriceDropdown = document.getElementById('priceHighLowSort');
    const sortRatingDropdown = document.getElementById('ratingHighLowSort');

    filterCategoryDropdown.addEventListener('change', () => {
        const selectedCategory = filterCategoryDropdown.value;
        const selectedFilterPrice = filterPriceDowndown.value;

        console.log('Selected category:', selectedCategory);
        console.log('Selected price:', selectedFilterPrice);

        const filteredProducts = filterByCategory(products, selectedCategory);
        console.log('Filtered Products:', filteredProducts);
        displayProducts(filteredProducts);
    });

    filterPriceDowndown.addEventListener('change', () => {
        const selectedCategory = filterCategoryDropdown.value;
        const selectedFilterPrice = filterPriceDowndown.value;

        console.log('Selected Category:', selectedCategory);
        console.log('Selected Price:', selectedFilterPrice);

        const filteredByCategory = filterByCategory(products, selectedCategory);
        const filteredByPrice = filterByPrice(filteredByCategory, selectedFilterPrice);
        console.log('Filtered Products:', filteredByPrice);
        displayProducts(filteredByPrice);
    });

    sortPriceDropdown.addEventListener('change', () =>{
        const sortedPrice = sortPriceDropdown.value;

        console.log('Sorted price:', sortedPrice);

        const sortedByPrice = sortByPrice(products, sortedPrice);
        console.log('Sorted by price:', sortedByPrice);

        displayProducts(sortedByPrice);
    }); 

    sortRatingDropdown.addEventListener('change', () =>{
        const sortedRating = sortRatingDropdown.value;

        console.log('Sorted rating:', sortedRating);

        const sortedByRating = sortByRating(products, sortedRating);
        console.log('Sorted by rating:', sortedByRating);

        displayProducts(sortedByRating);
    }); 


}

function displayProducts(products) {
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