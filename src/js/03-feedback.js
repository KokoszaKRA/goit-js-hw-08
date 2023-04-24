import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');


form.addEventListener(
  'input',
  throttle(e => {
    e.preventDefault();
    const user = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(user));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');

  let user = {
    email: email.value,
    message: message.value,
  };
  console.log(user);
  form.reset();
});

window.addEventListener("load", () => {
    
    const saveDate = localStorage.getItem('feedback-form-state');
    const parseData = JSON.parse(saveDate);

    email.value = parseData.email;
    message.value = parseData.message;

})