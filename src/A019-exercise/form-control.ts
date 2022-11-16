import isEmail from 'validator/lib/isEmail';
const show_error_messages = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();

  hideErrorMessages(this);
  checkFormEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(this)) console.log('Form sent');
});

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + show_error_messages)
    .forEach((item) => item.classList.remove(show_error_messages));
}

function checkFormEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'This field cannot be empty');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email is invalid');
}

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'The passwords are not equal.');
    showErrorMessage(password2, 'The passwords are not equal.');
  }
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerText = msg;
  formFields.classList.add(show_error_messages);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    .querySelectorAll('.' + show_error_messages)
    .forEach(() => (send = false));
  return send;
}
