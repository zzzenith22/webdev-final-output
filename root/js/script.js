
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
