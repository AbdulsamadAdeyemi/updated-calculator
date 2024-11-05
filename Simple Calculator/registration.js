const registerForm = document.getElementById('register');
const fullnameInput = document.getElementById('Registration__fullname');
const middlenameInput = document.getElementById('Registration__middlename');
const lastnameInput = document.getElementById('Registration__lastname');
const emailInput = document.getElementById('Registration__email');
const passwordInput = document.getElementById('Registration__password');
const phoneInput = document.getElementById('Registration__phone');
const genderSelect = document.getElementById('registration_gender');

// Get error message elements
const fullname_error = document.getElementById("fullname_error");
const middlename_error = document.getElementById("middlename_error");
const lastname_error = document.getElementById("lastname_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");
const phone_error = document.getElementById("phone_error");
const gender_error = document.getElementById("gender_error");

registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const fullname = fullnameInput.value.trim();
    const middlename = middlenameInput.value.trim();
    const lastname = lastnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const phone = phoneInput.value.trim();
    const gender = genderSelect.value.trim();

    // Clear previous error messages
    fullname_error.textContent = "";
    middlename_error.textContent = "";
    lastname_error.textContent = "";
    email_error.textContent = "";
    password_error.textContent = "";
    phone_error.textContent = "";
    gender_error.textContent = "";

    let error = false;


    if (fullname === "") {
        fullname_error.textContent = "Fullname must be inputted**";
        error = true;
    }

    if (middlename === "") {
        middlename_error.textContent = "Middlename must be inputted**";
        error = true;
    }

    if (lastname === "") {
        lastname_error.textContent = "Lastname must be inputted**";
        error = true;
    }

    if (email === "") {
        email_error.textContent = "Email must be inputted**";
        error = true;
    }

    if (password === "") {
        password_error.textContent = "Password must be inputted**";
        error = true;
    } else if (password.length < 8 || password.length > 32) {
        password_error.textContent = "Password must be between 8 and 32 characters**";
        error = true;
    }

    if (phone === "") {
        phone_error.textContent = "Phone number must be inputted**";
        error = true;

    }
    if (gender === "") {
        gender_error.textContent = "Choose your gender**";
        error = true;
    }

    if (!error) {
        const userData = {fullname,
            middlename,
            lastname,
            email,
            password,phone,gender
        };
        localStorage.setItem('user', JSON.stringify(userData));
        window.location.href = "login.html";
    }
});
