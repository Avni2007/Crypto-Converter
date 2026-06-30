const amount = document.getElementById("amount");
const crypto = document.getElementById("crypto");
const currency = document.getElementById("currency");
const convertBtn = document.getElementById("convertBtn");
const saveBtn = document.getElementById("saveBtn");
const result = document.getElementById("result");
const favorites = document.getElementById("favorites");

convertBtn.addEventListener("click", getPrice);
saveBtn.addEventListener("click", saveFavorite);

displayFavorites();

async function getPrice() {

    if (amount.value === "") {
        result.innerHTML = "Please enter an amount.";
        return;
    }

    const coin = crypto.value;
    const curr = currency.value;

    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${curr}`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        const price = data[coin][curr];
        const total = amount.value * price;

        result.innerHTML = `
            <h3>Conversion Result</h3>
            <p>${amount.value} ${coin}</p>
            <p>= ${total.toFixed(2)} ${curr.toUpperCase()}</p>
        `;

    } catch (error) {

        result.innerHTML = "Unable to fetch data.";

    }

}

function saveFavorite() {

    const pair = crypto.value.toUpperCase() + " → " + currency.value.toUpperCase();

    let favoritePairs = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favoritePairs.includes(pair)) {
        favoritePairs.push(pair);
        localStorage.setItem("favorites", JSON.stringify(favoritePairs));
    }

    displayFavorites();

}

function displayFavorites() {

    favorites.innerHTML = "";

    let favoritePairs = JSON.parse(localStorage.getItem("favorites")) || [];

    favoritePairs.forEach(function(pair) {

        const li = document.createElement("li");
        li.textContent = pair;
        favorites.appendChild(li);

    });

}