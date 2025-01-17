import { Product } from "./Product.js";

export async function getProducts() {

    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    
    const products = data.products.map(product => {
        return new Product(
            product.title,
            product.images,
            product.stock,
            product.price,
            product.discountPercentage,
            product.category,
            product.rating
        );
    })

    return products;
}
