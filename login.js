const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", async function(event){

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try{

        const response = await fetch("users.json");
        const users = await response.json();

        let validUser = false;

        for(let i = 0; i < users.length; i++){

            if(users[i].username === username && users[i].password === password){
                validUser = true;
                break;
            }

        }

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