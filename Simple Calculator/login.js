const form = document.getElementById("login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");


const sessionUser = sessionStorage.getItem("user");
if (sessionUser) {
    
    window.location.href = "index.html"; 
}


form.addEventListener("submit", loginsubmit);

function loginsubmit(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    emailError.textContent = "";
    passwordError.textContent = "";

    let throw_error = true;

    //email and password fields
    if (email === "") {
        emailError.textContent = "Email is required";
        throw_error = false;
    }

    if (password === "") {
        passwordError.textContent = "Password is required";
        throw_error = false;
    } else if (password.length < 6 || password.length > 32) {
        passwordError.textContent = "Password must be 6 to 32 characters";
        throw_error = false;
    }

   
    if (throw_error) {
        const storedUserData = localStorage.getItem("user");
        if (storedUserData) {
            const userObj = JSON.parse(storedUserData);
            
            // if email and password are same 
            if (userObj.email === email && userObj.password === password) {
                alert("Login successful!");

                // 
                sessionStorage.setItem("user", JSON.stringify(userObj));

               
                window.location.href = "index.html"; // redirecting
            } else {
                alert("Incorrect email or password.");
            }
        } else {
            alert("User does not exist. Please register first.");
            window.location.href = "registration.html";
        }
    }
}
