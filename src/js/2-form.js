const key = 'feedback-form-state';
const form = document.querySelector('form');

let formdata = {
  email: '',
  message: '',
};

form.addEventListener('input', handleInput);
function handleInput(event) {
  formdata[event.target.name] = event.target.value;
  localStorage.setItem(key, JSON.stringify(formdata));
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

form.addEventListener('submit', handleSumbit);
function handleSumbit(event) {
  event.preventDefault();

  if (
    event.target.elements.email.value.trim() == '' ||
    event.target.elements.message.value.trim() == ''
  ) {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem(key);

  let submittedData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log(submittedData);

  form.reset();
}
