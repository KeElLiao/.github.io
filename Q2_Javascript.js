const products = [
	"Backpack",
	"Smartphone",
	"Sunglasses",
	"Water Bottle",
	"Highheels",
	"Watch",
	"Laptop",
	"iPad",
	"Headphones",
	"Dress",
    "Notebook",
    "Portable charger",
];

function displayProducts(productArray) {
	const productList = document.getElementById("product-list");
	productList.innerHTML = "";
	for (let i = 0; i < productArray.length; i++) {
		const product = productArray[i];
		const listItem = document.createElement("li");
		listItem.textContent = product;
		productList.appendChild(listItem);
	}
}

displayProducts(products);

function searchProducts(query) {
	const filteredProducts = products.filter(function(product) {
		return product.toLowerCase().includes(query.toLowerCase());
	});
	return filteredProducts;
}

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", function(event) {
	const query = event.target.value;
	const filteredProducts = searchProducts(query);
	displayProducts(filteredProducts);
});