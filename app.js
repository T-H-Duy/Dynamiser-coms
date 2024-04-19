let form = document.querySelector('form');
let prenomForm = document.getElementById('first-name');
let nomForm = document.getElementById('last-name');
let messageForm = document.getElementById('message');
let messageErreur = document.getElementById('error-message');

function envoiCom(event) {

  if (!prenomForm.value || !nomForm.value || !messageForm.value) {
  messageErreur.style.display = 'block';
  } else {
  messageErreur.style.display = 'none';
  }

event.preventDefault();

let newCom = {
  prenomForm: prenomForm.value, nomForm: nomForm.value, messageForm: messageForm.value
};

form.reset();
}

form.addEventListener('submit', envoiCom);
