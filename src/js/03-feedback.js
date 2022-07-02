import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const formData = {};
const FORM_DATA = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

dataRecovery();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FORM_DATA);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
}

function dataRecovery() {
  const data = JSON.parse(localStorage.getItem(FORM_DATA));
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}
