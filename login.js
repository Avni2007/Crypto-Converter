const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {

        const response = await fetch("users.json");
        const users = await response.json();

        let isValidUser = false;

        for (let i = 0; i < users.length; i++) {

            if (
                users[i].username === username &&
                users[i].password === password
            ) {
                isValidUser = true;
                break;
            }
        }

        if (isValidUser) {
            window.location.href = "dashboard.html";
        } else {
            errorMessage.textContent = "Invalid Username or Password";
        }

    } catch (error) {
        errorMessage.textContent = "Unable to load users.";
    }

});