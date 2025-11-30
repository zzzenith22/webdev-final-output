document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login_button');
  const signinBtn = document.getElementById('signin_button');
  const loginDiv = document.getElementById('login');
  const signinDiv = document.getElementById('sign-in');


  const ACTIVE_BG = '#004030';
  const ACTIVE_COLOR = '#ffffff';


  function applyActiveStyle(btn) {
    btn.style.backgroundColor = ACTIVE_BG;
    btn.style.color = ACTIVE_COLOR;
  }


  function clearStyle(btn) {
    btn.style.backgroundColor = '';
    btn.style.color = '';
  }


  function showLoginForm() {
    loginDiv.style.display = 'block';
    signinDiv.style.display = 'none';
  }

  function showSigninForm() {
    loginDiv.style.display = 'none';
    signinDiv.style.display = 'block';
  }


  function activateLogin() {
    loginBtn.classList.add('active');
    signinBtn.classList.remove('active');

    applyActiveStyle(loginBtn);
    clearStyle(signinBtn);

    showLoginForm();
  }


  function activateSignin() {
    signinBtn.classList.add('active');
    loginBtn.classList.remove('active');

    applyActiveStyle(signinBtn);
    clearStyle(loginBtn);

    showSigninForm();
  }

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    activateLogin();
  });

  signinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    activateSignin();
  });

  function addHoverHandlers(btn) {
    btn.addEventListener('mouseenter', () => {
      if (!btn.classList.contains('active')) {
        applyActiveStyle(btn);
      }
    });
    btn.addEventListener('mouseleave', () => {
      if (!btn.classList.contains('active')) {
        clearStyle(btn);
      }
    });
  }
  addHoverHandlers(loginBtn);
  addHoverHandlers(signinBtn);

  activateLogin();

});

 
 
  const emailLogin = document.getElementById('email');

 function loginValidation() {

   let valid = true;
    
  if (emailLogin === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    document.getElementById('emailError').innerHTML = 'Please enter a valid email.';
    document.getElementById('email').style.border = '2px solid red';
    valid = false;
  } else {
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('email').style.border = '2px solid black';
  }

   const passwordLogin = document.getElementById('password').value;
  if (passwordLogin === '') {
    document.getElementById('password_Error').innerHTML = 'Please enter your password.';
    document.getElementById('password').style.border = '2px solid red';
    valid = false;
  } else if (passwordLogin.length < 8) {
    document.getElementById('password_Error').innerHTML = 'Please enter a valid password.';
    document.getElementById('password').style.border = '2px solid red';
  } else {
    document.getElementById('password_Error').innerHTML = '';
    document.getElementById('password').style.border = '2px solid black';
  }

  if (valid) {
    window.location.href = "homepage.html"; 
  }
}


   function signinValidation() {

    valid = true;

  const emailSignin = document.getElementById('signin_email').value;
  if (emailSignin === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailSignin)) {
    document.getElementById('signin-emailError').innerHTML = 'Please enter a valid email.';
    document.getElementById('signin_email').style.border = '2px solid red';
    valid = false;
  } else {
    document.getElementById('signin-emailError').innerHTML = '';
    document.getElementById('signin_email').style.border = '2px solid black';
  }

  const passwordSignin = document.getElementById('signin_password').value;
  if (passwordSignin === '') {
    document.getElementById('signin-passwordError').innerHTML = 'Please a valid password';
    document.getElementById('signin_password').style.border = '2px solid red';
    valid = false;
  } else if (passwordSignin.length < 8) {
    document.getElementById('signin-passwordError').innerHTML = 'Password must be at least 8 characters long.';
    document.getElementById('signin_password').style.border = '2px solid red';
    valid = false;
  } else {
    document.getElementById('signin-passwordError').innerHTML = '';
    document.getElementById('signin_password').style.border = '2px solid black';
  }

  const nameDetails = document.getElementById('signin_nameDetail').value;
  if (nameDetails === '' || !/^[a-zA-Z ]+$/.test(nameDetails)) {
    document.getElementById('nameError').textContent = 'Please enter a valid name.';
    document.getElementById('signin_nameDetail').style.border = '2px solid red';
    valid = false;
  } else {
    document.getElementById('nameError').textContent = '';
    document.getElementById('signin_nameDetail').style.border = '2px solid black';
  }

  if (valid) {
    window.location.href = "homepage.html"; 
  }
}