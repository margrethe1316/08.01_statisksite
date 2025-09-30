const produktliste = document.querySelector("#produktliste");
const productUrl = "produkter.json";

getData();

function getData() {
  console.log("getData...");
  fetch(productUrl)
    .then((res) => res.json())
    .then((data) => showProdukter(data));
}

function showProdukter(data) {
  console.log("Viser produkter:", data);
  produktliste.innerHTML = ""; // ryd containeren

  data.forEach((produkt) => {
    let udsolgtClass = "";
    if (produkt.udsolgt) {
      udsolgtClass = "udsolgt";
    }

    produktliste.innerHTML += `
      <article class="${udsolgtClass}">
        <h2>${produkt.productdisplayname}</h2>
        <img src="${produkt.image}" alt="${produkt.productdisplayname}"/>
        <h3>${produkt.price} DKK</h3>
        <a href="produkt.html?id=${produkt.id}">
          <h3>Læs mere</h3>
        </a>
      </article>
    `;
  });
}
