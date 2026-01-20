document.addEventListener('DOMContentLoaded', () => {

    const loginTabBtn = document.getElementById('login_button');
    const signinTabBtn = document.getElementById('signin_button');
    const loginDiv = document.getElementById('login');
    const signinDiv = document.getElementById('sign-in');

    const loginFormBtn = document.getElementById('loginbutton');
    const signinFormBtn = document.getElementById('signinButton');

    const ACTIVE_BG = '#004030';
    const ACTIVE_COLOR = '#ffffff';

    function setActive(btnActive, btnInactive) {
        btnActive.style.backgroundColor = ACTIVE_BG;
        btnActive.style.color = ACTIVE_COLOR;
        btnInactive.style.backgroundColor = "";
        btnInactive.style.color = "";
    }

    function showLogin() {
        loginDiv.style.display = "block";
        signinDiv.style.display = "none";
        setActive(loginTabBtn, signinTabBtn);
    }

    function showSignin() {
        loginDiv.style.display = "none";
        signinDiv.style.display = "block";
        setActive(signinTabBtn, loginTabBtn);
    }

    loginTabBtn.addEventListener('click', showLogin);
    signinTabBtn.addEventListener('click', showSignin);

    loginFormBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginValidation();
    });
    signinFormBtn.addEventListener('click', (e) => {
        e.preventDefault();
        signinValidation();
    });

    showLogin();
});


function loginValidation() {
    const emailLogin = document.getElementById('email');
    const passwordLogin = document.getElementById('password');

    let valid = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLogin.value)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email.';
        emailLogin.style.border = '2px solid red';
        valid = false;
    } else {
        document.getElementById('emailError').innerText = '';
        emailLogin.style.border = '2px solid black';
    }

    if (passwordLogin.value === '') {
        document.getElementById('password_Error').innerText = 'Please enter your password.';
        passwordLogin.style.border = '2px solid red';
        valid = false;
    } else {
        document.getElementById('password_Error').innerText = '';
        passwordLogin.style.border = '2px solid black';
    }

    if (!valid) return;

    fetch("assets/json/login.json")
        .then(res => res.json())
        .then(data => {

            let defaultUsers = data.User;
            let savedUsers = JSON.parse(localStorage.getItem("users")) || [];

            let users = [...defaultUsers, ...savedUsers];

            const user = users.find(u =>
                u.email === emailLogin.value &&
                u.password === passwordLogin.value
            );

            if (user) {
                window.location.href = "homepage.html";
            } else {
                document.getElementById('password_Error').innerText = 'Incorrect email or password.';
                passwordLogin.style.border = '2px solid red';
            }

        })
        .catch(err => console.log("Error loading JSON:", err));
}

function signinValidation() {
    const nameInput = document.getElementById('signin_nameDetail');
    const emailSignin = document.getElementById('signin_email');
    const passwordSignin = document.getElementById('signin_password');

    let valid = true;

    if (nameInput.value === '' || !/^[a-zA-Z ]+$/.test(nameInput.value)) {
        document.getElementById('nameError').innerText = 'Please enter a valid name.';
        nameInput.style.border = '2px solid red';
        valid = false;
    } else {
        document.getElementById('nameError').innerText = '';
        nameInput.style.border = '2px solid black';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailSignin.value)) {
        document.getElementById('signin-emailError').innerText = 'Please enter a valid email.';
        emailSignin.style.border = '2px solid red';
        valid = false;
    } else {
        document.getElementById('signin-emailError').innerText = '';
        emailSignin.style.border = '2px solid black';
    }

    if (passwordSignin.value.length < 8) {
        document.getElementById('signin-passwordError').innerText = 'Password must be at least 8 characters long.';
        passwordSignin.style.border = '2px solid red';
        valid = false;
    } else {
        document.getElementById('signin-passwordError').innerText = '';
        passwordSignin.style.border = '2px solid black';
    }

    if (!valid) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({
        name: nameInput.value,
        email: emailSignin.value,
        password: passwordSignin.value
    });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    window.location.href = "homepage.html";
}
