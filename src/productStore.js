const productArray = [{ //If this pulls from a db this would be a lot more robust
    id: "price_1M1In2IS6vfGou9X0rnztKrs", title: "Coffee", price: 9.99
},
    {
    id: "price_1M1IpJIS6vfGou9XQgNuDAgt", title: "Sunglasses", price: 39.99
},
    {
    id: "price_1M1IpxIS6vfGou9X7OxzEEoj", title: "DSLR Camera", price: 899.99
}]

const getProductData = (id) => {
    let productData = productArray.find(product => product.id === id)

    if (productData === undefined) {
        console.log(`Product Data does not exist for ID: ${id}`);
        return undefined;
    }

    return productData;
}


export {productArray, getProductData};