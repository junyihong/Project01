const loginForm = document.querySelector(".form-group");
const loginInput = document.querySelector("#login-input-id");
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    // event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello, ${username}.`;
}

loginForm.addEventListener("submit", onLoginSubmit);

