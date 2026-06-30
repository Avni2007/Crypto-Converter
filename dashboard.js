const amount = document.getElementById("amount");
const crypto = document.getElementById("crypto");
const currency = document.getElementById("currency");
const convertBtn = document.getElementById("convertBtn");
const saveBtn = document.getElementById("saveBtn");
const logoutBtn = document.getElementById("logoutBtn");
const result = document.getElementById("result");
const favorites = document.getElementById("favorites");

convertBtn.addEventListener("click", getPrice);
saveBtn.addEventListener("click", saveFavorite);
logoutBtn.addEventListener("click", logout);

displayFavorites();

async function getPrice() {

    if (amount.value === "" || amount.value <= 0) {
        result.innerHTML = "<p style='color:red;'>Please enter a valid amount.</p>";
        return;
    }

    const coin = crypto.value;
    const curr = currency.value;

    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${curr}`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("API Error");
        }

        const data = await response.json();

        const price = data[coin][curr];
        const total = Number(amount.value) * price;

        result.innerHTML = `
            <h3>Conversion Result</h3>
            <p><strong>Crypto:</strong> ${coin.toUpperCase()}</p>
            <p><strong>Currency:</strong> ${curr.toUpperCase()}</p>
            <p><strong>Amount:</strong> ${amount.value}</p>
            <p><strong>Current Price:</strong> ${price.toFixed(2)} ${curr.toUpperCase()}</p>
            <h2>Total : ${total.toFixed(2)} ${curr.toUpperCase()}</h2>
        `;

    }
    catch (error) {

        result.innerHTML = "<p style='color:red;'>Unable to fetch data. Please try again.</p>";

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

    if (favoritePairs.length === 0) {

        favorites.innerHTML = "<li>No favorite pairs added.</li>";
        return;

    }

    favoritePairs.forEach(function(pair){

        const li = document.createElement("li");

        li.textContent = pair;

        favorites.appendChild(li);

    });

}

function logout(){

    localStorage.removeItem("favorites");

    window.location.href = "index.html";

}