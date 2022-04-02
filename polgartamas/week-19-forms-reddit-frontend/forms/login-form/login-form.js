const eyePicture = document.querySelector('img');
const inputField = document.querySelector('[type="password"]');
console.log(inputField);
eyePicture.addEventListener('click', function () {
  inputField.type = 'text';
});
