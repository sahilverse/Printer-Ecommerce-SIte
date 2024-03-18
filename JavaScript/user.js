// Show and Hide Password Characters
const showPassword = document.getElementById("show");
const hidePassword = document.getElementById("hide");
const password = document.getElementById("password");

showPassword.addEventListener('click', () => {
    showPassword.style.display = "none"; // hide the show password button
    hidePassword.style.display = "initial"; // show the hide password button
    password.type = "text"; // change the input type to text to show the password characters
})

hidePassword.addEventListener('click', () => {
    showPassword.style.display = "initial"; // show the show password button
    hidePassword.style.display = "none"; // hide the hide password button
    password.type = "password"; // change the input type to password to hide the password characters
})

// displays Error 
const addErrorMessage = (element, message) => {
    let parent = element.parentElement;
    if (parent.contains(parent.querySelector(".error"))) {
        parent.querySelector(".error").innerText = message;
    } else {
        parent.innerHTML += `<p class="error">` + message + `</p>`;

    }
}

// Removes Error
const removeIfError = (element) => {
    let parent = element.parentElement;
    if (parent.contains(parent.querySelector(".error"))) {
        parent.querySelector(".error").remove(); // remove the error message if it exists
    }
}

// Email and phone validation using REGEX
const validateEmail = (email) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.value.match(validRegex);
}
const validatePhone = (phone) => {
    let validRegex = /^[0-9]{10}$/;
    return phone.value.match(validRegex);
}

// submitting form
const login = () => {
    let form = document.forms["loginForm"];
    let id = form["id"];
    let password = form["password"];

    if (id.value == "") {

        addErrorMessage(id, "You can't leave this empty.");
        return false;

    } else {

        if (!validateEmail(id) && !validatePhone(id)) {

            addErrorMessage(id, "Incorrect Email or Phone");
            return false;

        }

        removeIfError(id);
    }

    if (password.value == "") {

        addErrorMessage(password, "You can't leave this empty.");
        return false;

    } else {

        removeIfError(password);
    }
    alert(`Login Successful! ${id.value}`);
    return true;
};
