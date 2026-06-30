const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", checkLogin);

async function checkLogin(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {

        const response = await fetch("users.json");
        const users = await response.json();

        let loginSuccess = false;

        users.forEach(function(user) {

            if (user.username === username && user.password === password) {
                loginSuccess = true;
            }

        });

        if (loginSuccess) {

            window.location.href = "dashboard.html";

        } else {

            errorMessage.textContent = "Invalid Username or Password";

        }

    } catch (error) {

        errorMessage.textContent = "Unable to load users.";

    }

}