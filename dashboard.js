const amount = document.getElementById("amount");
const crypto = document.getElementById("crypto");
const currency = document.getElementById("currency");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", getPrice);

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
            <p>${amount.value} ${coin.toUpperCase()}</p>
            <p>= ${total.toFixed(2)} ${curr.toUpperCase()}</p>
        `;

    } catch (error) {

        result.innerHTML = "Unable to fetch data.";

    }

}