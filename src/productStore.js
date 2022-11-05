const productArray = [{
    id: "1", title: "Coffee", price: 9.99
},
    {
    id: "2", title: "Sunglasses", price: 39.99
},
    {
    id: "3", title: "DSLR Camera", price: 899.99
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