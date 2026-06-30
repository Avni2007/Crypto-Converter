const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", async function(event){

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try{

        const response = await fetch("users.json");
        const users = await response.json();

        const validUser = users.find(function(user){

            return user.username === username &&
                   user.password === password;

        });

        if(validUser){

            window.location.href = "dashboard.html";

        }else{

            errorMessage.textContent = "Invalid Username or Password";

        }

    }

    catch(error){

        errorMessage.textContent = "Unable to load users.";

    }

});