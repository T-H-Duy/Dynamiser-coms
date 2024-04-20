const form = document.querySelector('form');
const prenomForm = document.getElementById('first-name');
const nomForm = document.getElementById('last-name');
const messageForm = document.getElementById('message');
const messageErreur = document.getElementById('error-message');
const listeCommentaires = document.getElementById('comment-list');

function newDiv(comment) {
  let newCom = document.createElement('div');
    newCom.innerHTML = `<div class="flex-1">
        <h3 class="font-medium text-gray-900">${comment.prenomForm} ${comment.nomForm}</h3>
        <div class="prose prose-sm mt-4 max-w-none text-gray-500">
          <p>${comment.messageForm}</p>
        </div>
      </div>`;
      
return newCom;
}

function envoiCom(event) {
  let newCom = {prenomForm: prenomForm.value, nomForm: nomForm.value, messageForm: messageForm.value};
  let newComItem = newDiv(newCom); 

  if (!prenomForm.value || !nomForm.value || !messageForm.value) {
  messageErreur.style.display = 'block';
  } else {
  messageErreur.style.display = 'none';
  }

listeCommentaires.appendChild(newComItem);
event.preventDefault();
form.reset();
}

form.addEventListener('submit', envoiCom);
