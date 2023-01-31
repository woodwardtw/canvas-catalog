if(document.querySelector('#mailing')){
const mailButton = document.querySelector('#mailing');
mailButton.addEventListener("click", showForm);
  const modalClose = document.querySelector('#closeModal');
  modalClose.addEventListener("click", hideModal);
   var formDiv = document.querySelector('#myModal');
}

function showForm(){
  formDiv.style.display = "block";
  formDiv.focus();
}

function hideModal(){
  formDiv.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == formDiv) {
    formDiv.style.display = "none";
  }
}