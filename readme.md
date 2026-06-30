# Crypto Converter

## Project Overview

Crypto Converter is a simple web application developed using HTML, CSS, and JavaScript. The project allows users to log in using credentials stored in a local JSON file and convert cryptocurrencies into different currencies using live data from the CoinGecko API.

This project was developed as part of a web development course to demonstrate HTML, CSS, JavaScript, API integration, DOM manipulation, local storage, and Git version control.

---

## Features

- User Login Authentication
- Login credentials stored in `users.json`
- Fetch data using JavaScript `fetch()` API
- Cryptocurrency to Currency Conversion
- Live data from CoinGecko API
- Save Favorite Currency Pairs
- Favorite pairs stored using Local Storage
- Logout Functionality
- Responsive User Interface
- Error handling for invalid login and API failures

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- CoinGecko API
- Git
- GitHub

---

## Project Structure

```
Crypto-Converter/
│── index.html
│── dashboard.html
│── style.css
│── login.js
│── dashboard.js
│── users.json
│── README.md
│── .gitignore
```

---

## Login Credentials

### Admin User

**Username:** admin

**Password:** password123

### Student User

**Username:** student

**Password:** jsbasic2026

---

## How to Run the Project

1. Download or clone the repository.
2. Open the project in Visual Studio Code.
3. Install the Live Server extension (if not already installed).
4. Right-click on `index.html`.
5. Select **Open with Live Server**.
6. Login using the provided credentials.
7. Use the dashboard to convert cryptocurrency values.

---

## API Used

This project uses the **CoinGecko API** to fetch live cryptocurrency prices.

Example Endpoint:

https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr

---

## Git Commit History

- Initial project setup
- Create login page
- Add styling
- Add users database
- Implement login authentication
- Create dashboard layout
- Integrate CoinGecko API
- Add favorite pairs
- Improve UI

---

## Future Improvements

- Add more cryptocurrencies
- Add more currencies
- Display cryptocurrency icons
- Add dark mode
- Show conversion history

---

## Author

**Name:** Avni

**Course:** Web Development Mini Project

**Year:** 2026
