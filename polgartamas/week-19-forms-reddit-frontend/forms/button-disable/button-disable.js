const dogAndCatRadioButton = document.querySelectorAll('#dog, #cat');
const signUp2Dis = document.querySelector('#sign_up2');
for (let i = 0; i < dogAndCatRadioButton.length; i++) {
  dogAndCatRadioButton[i].addEventListener('click', function () {
    signUp2Dis.disabled = signUp2Dis.enable;
  });
}

const catFactsYes = document.querySelector('#yes');
const iLoveCats = document.querySelector('#love_cats');
catFactsYes.addEventListener('click', function () {
  iLoveCats.disabled = iLoveCats.enable;
  signUp2Dis.disabled;
});

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', function () {
  if (iLoveCats.enable) {
    alert("Thank you, you've successfully signed up for cat facts");
  } else {
    alert('Sigh, we still added you to the cat facts list');
  }
});

const viktorButton = document.querySelector('#viktor');
const catFactsNo = document.querySelector('#no');
viktorButton.addEventListener('click', function () {
  catFactsNo.addEventListener('click', function () {
    signUp2Dis.disabled = signUp2Dis.enable;
    iLoveCats.disabled;
  });
});
