// adds Error Message

function addErrorMessage(element, message) {
    let parent = element.parentElement;
    if (parent.contains(parent.querySelector(".error"))) {
        parent.querySelector(".error").innerText = message;
    } else {
        parent.innerHTML += `<p class="error" style="margin:0;">` + message + `</p>`;
    }
};

// removes error if the input field have valid value
function removeIfError(element) {
    let parent = element.parentElement;
    if (parent.contains(parent.querySelector(".error"))) {
        parent.querySelector(".error").remove();
    }
}

// uses regex to check whether the given email is valid
function validateEmail(email) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.value.match(validRegex);
}

// Function for Submitting Form
function submitForm() {
    let form = document.forms["contactForm"]
    let firstName = form["fname"];
    let lastName = form["lname"];
    let email = form["email"];
    let phone = form["phone"];
    let message = form["message"];

    if (firstName.value == "") {
        addErrorMessage(firstName, "Please enter your first name");
        return false;
    } else {
        removeIfError(firstName);
    }

    if (lastName.value == "") {
        addErrorMessage(lastName, "Please enter your last name");
        return false;
    } else {
        removeIfError(lastName);
    }

    if (!validateEmail(email)) {
        addErrorMessage(email, "Please enter valid email");
        return false;
    } else {
        removeIfError(email);
    }

    if (phone.value.length != 10 || isNaN(phone.value)) {
        addErrorMessage(phone, "Please enter valid 10 digits number");
        return false;
    } else {
        removeIfError(phone);
    }

    if (message.value == "") {
        addErrorMessage(message, "Please enter your message");
        return false;
    } else {
        removeIfError(message);
    }

    alert("Thank you! We have received your messsage.");
    return true;
};

