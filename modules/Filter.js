const filterByCategory = (products, category) => 
    category === "All" || category === "Select category" ? products : products.filter(product => product.category === category);

const filterByPrice = (products, priceRange) => {
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

const sortByPrice = (products, order = 'lowToHighPrice') => {
    return products.sort((a, b) => {
        if (order === 'lowToHighPrice') {
            return a.discountedPrice() - b.discountedPrice(); // Lågt till högt
        } else if (order === 'highToLowPrice') {
            return b.discountedPrice() - a.discountedPrice(); // Högt till lågt
        }
    });
};

const sortByRating = (products, order = 'lowToHighRating') => {
    return products.sort((a, b) => {
        if (order === 'lowToHighRating') {
            return a.rating - b.rating; // Lågt till högt
        } else if (order === 'highToLowRating') {
            return b.rating - a.rating; // Högt till lågt
        }
    });
};

export {filterByCategory, filterByPrice, sortByPrice, sortByRating}