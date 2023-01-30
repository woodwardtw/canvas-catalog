if(document.querySelector('#mailing')){
	const mailButton = document.querySelector('#mailing');
	mailButton.addEventListener("click", showForm);
}

function showForm(){
	const formDiv = document.querySelector('#m-form');
	formDiv.classList.toggle('hide');
}