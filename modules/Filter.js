//export const filterByCategory = arr => arr.filter(product => product.category)

export const filterByCategory = (products, category) => 
    category === "All" || category === "Select category" ? products : products.filter(product => product.category === category);

export const filterByPrice = (products, priceRange) => {
    if (priceRange === "Select prize") {
        return products;  
    }

    return products.filter(product => {
        const displayedPrice = product.discountedPrice();

        if (priceRange === "< $50") {
            return displayedPrice < 50;
        }

        else if (priceRange === "> $50") {
            return displayedPrice > 50;
        }

        return false;
    });
};