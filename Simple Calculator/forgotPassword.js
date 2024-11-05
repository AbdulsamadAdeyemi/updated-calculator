const form = document.getElementById("forgotPassword");
const emailInput = document.getElementById("email");
const newPasswordInput = document.getElementById("newpassword");
const confirmPasswordInput = document.getElementById("confirmpassword");

const emailError = document.getElementById("emailError");
const newPasswordError = document.getElementById("newpasswordError");
const confirmPasswordError = document.getElementById("confirmpasswordError");

form.addEventListener("submit", resetPassword);

function resetPassword(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const newpassword = newPasswordInput.value.trim();
    const confirmpassword = confirmPasswordInput.value.trim();

    emailError.textContent = "";
    newPasswordError.textContent = "";
    confirmPasswordError.textContent = "";

    let throw_error = true;

    if (email === "") {
        emailError.textContent = "Email is required";
        throw_error = false;
    }

    if (newpassword === "") {
        newPasswordError.textContent = "Please enter a new password.";
        throw_error = false;
    } else if (newpassword.length < 6) {
        newPasswordError.textContent = "Password must be at least 6 characters.";
        throw_error = false;
    }

    if (confirmpassword === "") {
        confirmPasswordError.textContent = "Please confirm your new password.";
        throw_error = false;
    } else if (newpassword !== confirmpassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        throw_error = false;
    }

    if (throw_error) {
        const storedUserData = localStorage.getItem("user");
        if (storedUserData) {
            const userObj = JSON.parse(storedUserData);

            if (userObj.email === email) {
                userObj.password = newpassword;
                localStorage.setItem("user", JSON.stringify(userObj));
                alert("Password reset successful!");
                window.location.href = "login.html";
            } else {
                alert("User does not exist. Please register first.");
                window.location.href = "registration.html";
            }
        } else {
            alert("User does not exist. Please register first.");
            window.location.href = "registration.html";
        }
    }
}
