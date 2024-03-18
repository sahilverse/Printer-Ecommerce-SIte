// Show and Hide Password Characters
const showPassword = document.getElementById("show");
const hidePassword = document.getElementById("hide");
const password = document.getElementById("password");

showPassword.addEventListener('click', () => {
    showPassword.style.display = "none";
    hidePassword.style.display = "initial";
    password.type = "text";
});

hidePassword.addEventListener('click', () => {
    showPassword.style.display = "initial";
    hidePassword.style.display = "none";
    password.type = "password";
});

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
        parent.querySelector(".error").remove();
    }
}

// Email and phone validation using REGEX
const validateEmail = (email) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.value.match(validRegex);
};

const validatePhone = (phone) => {
    let validRegex = /^[0-9]{10}$/;
    return phone.value.match(validRegex);
};

// submitting form
const signup = () => {
    let form = document.forms["loginForm"];
    let id = form["id"];
    let password = form["password"];
    let fullName = form["fullName"];
    let gender = form["gender"];
    let birthDate = form["birthdate"];

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

    if (fullName.value == "") {
        addErrorMessage(fullName, "You can't leave this empty.");
        return false;
    } else {
        removeIfError(fullName);
    }

    if (password.value == "") {
        addErrorMessage(password, "You can't leave this empty.");
        return false;
    } else {
        if (password.value.length < 8) {
            addErrorMessage(password, "The length of Password should be minimum of 8 characters");
            return false;
        }
        removeIfError(password);
    }

    if (gender.value === "male" || gender.value === "female") {
        removeIfError(gender);
    } else {
        addErrorMessage(gender, "Select your gender");
        return false;
    }

    if (birthDate.value == "") {
        addErrorMessage(birthDate, "Enter your birthdate");
        return false;
    } else {
        removeIfError(birthDate);
    }

    alert(`Lumina Account Created Successfully! ${fullName.value}`);
    return true;
};
