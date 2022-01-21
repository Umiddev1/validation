let elForm = document.querySelector('.box__form');
let elLoginInp = document.querySelector('.login-inp');
let elPassInp = document.querySelector('.pass-inp');
let elSpn = document.querySelector('.spn');
let elSpn1 = document.querySelector('.spn1');
let arr = [];
elForm.addEventListener("submit", (e) => {
  e.preventDefault()
  arr = [
    {
      login: elLoginInp.value,
      pass: elPassInp.value
    }
  ]
  if(elLoginInp.value === '' && elPassInp.value === '') {
    console.log("Bo'shku");
    elLoginInp.style.borderColor = "red";
    elPassInp.style.borderColor = "red";
    elSpn.innerHTML = "Bo'sh kiritish Mumkin emas..."
    elSpn1.innerHTML = "Bo'sh kiritish Mumkin emas..."
  }
  else if(elLoginInp.value === '') {
    elLoginInp.style.borderColor = "red";
    elSpn.innerHTML = "Loginda hech narsa yo'q..."
  }
  else if(elPassInp.value === '') {
    elPassInp.style.borderColor = "red";
    elSpn1.innerHTML = "Passwordda hech narsa yo'q..."
  }
  else if(elLoginInp.value.length <= 3 && elPassInp.value.length <= 3) {
    elLoginInp.style.borderColor = "red";
    elPassInp.style.borderColor = "red";
    elSpn.innerHTML = "Loginda kamida 4ta belgi bo'lishi kerak..."
    elSpn1.innerHTML = "Passwordda kamida 4ta belgi bo'lishi kerak..."
  }
  else if(elLoginInp.value.length > 3 && elPassInp.value.length <= 3) {
    console.log("Passwordda kamida 4ta belgi bo'lishi kerak...");
    elPassInp.style.borderColor = "red";
    elSpn1.innerHTML = "Passwordda kamida 4ta belgi bo'lishi kerak..."
  }
  else if(elLoginInp.value.length <= 3 && elPassInp.value.length > 3) {
    console.log("Loginda kamida 4ta belgi bo'lishi kerak...");
    elLoginInp.style.borderColor = "red";
    elSpn.innerHTML = "Loginda kamida 4ta belgi bo'lishi kerak..."
  }
  else {
    elLoginInp.style.borderColor = "green"
    elPassInp.style.borderColor = "green"
    elLoginInp.value = "";
    elPassInp.value = "";
    elSpn.innerHTML = "Tabriklaymiz"
    elSpn1.innerHTML = "Tabriklaymiz"
    elSpn.style.color = "green";
    elSpn1.style.color = "green";
  }
  console.log(arr);
})