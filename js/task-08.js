const loginForm = document.querySelector('.login-form');
// const email = loginForm.querySelector('input[name="email"]');
// const pass = loginForm.querySelector('input[name="password"]');

loginForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  const {
    elements: { email, password },
  } = event.currentTarget;

  event.preventDefault();
  if (email.value === '' || password.value === '') {
    alert('всі поля повинні бути заповнені');
  } else {
    console.log({ [email.name]: email.value, [password.name]: password.value });
    event.currentTarget.reset();
  }
}
