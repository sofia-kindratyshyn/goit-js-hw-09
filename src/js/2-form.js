const key = 'feedback-form-state';
const form = document.querySelector('form');

let formData = {
  email: '',
  message: '',
};

form.addEventListener('input', handleInput);
function handleInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(key, JSON.stringify(formData));
}

let savedData = JSON.parse(localStorage.getItem(key));

if (!(savedData == null)) {
  console.log(savedData);
}

if (
  (form.elements.email.value.trim() == '' ||
    form.elements.message.value.trim() == '') &&
  !(savedData === null)
) {
  form.elements.email.value = savedData.email;
  form.elements.message.value = savedData.message;
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  if (
    form.elements.email.value.trim() === '' ||
    form.elements.message.value.trim() === ''
  ) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(key);

  form.reset();
}
