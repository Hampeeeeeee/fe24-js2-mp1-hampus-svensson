// funktion som är ett filter på produkternas kategorier.
const filterByCategory = (products, category) => 
    category === "All" || category === "Select category" ? products : products.filter(product => product.category === category);

// funktion på produkternas priser.
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

// funktion som sorterar produkterna beroende på pris, lågt till högt eller högt till lågt.
const sortByPrice = (products, order = 'lowToHighPrice') => {
    return products.sort((a, b) => {
        if (order === 'lowToHighPrice') {
            return a.discountedPrice() - b.discountedPrice(); 
        } else if (order === 'highToLowPrice') {
            return b.discountedPrice() - a.discountedPrice(); 
        }
    });
};

// funktion som sorterar produkterna beroende på omdöme, lågt till högt eller högt till lågt.
const sortByRating = (products, order = 'lowToHighRating') => {
    return products.sort((a, b) => {
        if (order === 'lowToHighRating') {
            return a.rating - b.rating; 
        } else if (order === 'highToLowRating') {
            return b.rating - a.rating; 
        }
    });
};

export {filterByCategory, filterByPrice, sortByPrice, sortByRating}