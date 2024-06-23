document.addEventListener("DOMContentLoaded", () => {
  const productForm = document.getElementById("productForm");
  const productsContainer = document.getElementById("productsContainer");
  const clearButton = document.getElementById("clearButton");

  productForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productImage = document.getElementById("productImage").value;

    createProductCard(productName, productPrice, productImage);

    productForm.reset();
  });

  clearButton.addEventListener("click", () => {
    productForm.reset();
  });

  function createProductCard(name, price, imageUrl) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.src = imageUrl;

    const productName = document.createElement("h3");
    productName.textContent = name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${price}`;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "🗑️";
    deleteButton.addEventListener("click", () => {
      productsContainer.removeChild(productCard);
    });

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(deleteButton);

    productsContainer.appendChild(productCard);
  }
});
