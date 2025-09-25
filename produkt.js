console.log("siden loaded");

const id = 1583;
const productUrl = "https://kea-alt-del.dk/t7/api/products/" + id;
const product = document.querySelector("#productContainer");

console.log("product", productUrl);

function getData() {
  fetch(productUrl).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  console.log("shows data er", data);

  product.innerHTML = `

  <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="Mand i hvid t-shirt">

        <div class="product-info">
            <h2>Product Information</h2>
            <h3>Model name</h3>
            <p>${data.productdisplayname}</p>
            <h3>Color</h3>
            <p>${data.basecolour}</p>
            <h3>Price</h3>
            <p>${data.price}</p>

            <h3>Brand</h3>
            <p>${data.brandbio}</p>

            <div class="buy-box">
                <h3>${data.productdisplayname}</h3>
                <p>${data.brandname} | ${data.articletype}</p>

                <h3>Choose a size</h3>
                <div class="size-picker">
                    <label>
                        <input type="radio" name="size" value="XS">
                        <span>XS</span>
                    </label>
                    <label>
                        <input type="radio" name="size" value="S">
                        <span>S</span>
                    </label>
                    <label>
                        <input type="radio" name="size" value="M">
                        <span>M</span>
                    </label>
                    <label>
                        <input type="radio" name="size" value="L">
                        <span>L</span>
                    </label>
                    <label>
                        <input type="radio" name="size" value="XL">
                        <span>XL</span>
                    </label>
                </div>

                <button class="add-to-basket">Add to basket</button>
            </div>
        </div>

  

`;
}

getData();
