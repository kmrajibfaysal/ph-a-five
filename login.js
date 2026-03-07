const IncorrectUsernameWarning = document.getElementById(
  'incorrect-username-warning',
);
const IncorrectPasswordWarning = document.getElementById(
  'incorrect-password-warning',
);

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  //   Demo Credentials
  const correctUsername = 'admin';
  const correctPassword = 'admin123';

  if (username === correctUsername && password === correctPassword) {
    // Redirect to main.html
    window.location.href = 'main.html';
  } else {
    IncorrectUsernameWarning.classList.remove('hidden');
    IncorrectPasswordWarning.classList.remove('hidden');
  }
}
