const key = 'feedback-form-state';
const form = document.querySelector('form');

const savedData = JSON.parse(localStorage.getItem(key)) || {};
const formdata = {
  email: savedData.email ?? '',
  message: savedData.message ?? '',
};

form.elements.email.value = formdata.email;
form.elements.message.value = formdata.message;

form.addEventListener('input', handleInput);
function handleInput(event) {
  if (event.target.name === 'email' || event.target.name === 'message') {
    formdata[event.target.name] = event.target.value;
    localStorage.setItem(key, JSON.stringify(formdata));
  }
}

form.addEventListener('submit', handleSumbit);
function handleSumbit(event) {
  event.preventDefault();

  if (!formdata.email.trim() || !formdata.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formdata);
  localStorage.removeItem(key);
  form.reset();
  formdata.email = '';
  formdata.message = '';
}
