const url="http://localhost:3000/clothstore"
function fetchProducts(){
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log("Updated Product List:");
        data.forEach(product => {
            console.log(`${product.id},${product.name},${product.category},${product.size},${fetchProducts.price},${product.inStock}`)
        });
    })
}
setInterval(fetchProducts,5000)
fetchProducts()