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

//deal with middlebury people in accounts

if(document.querySelector('.RegistrationHeader__Title')){
 const regTitle = document.querySelector('.RegistrationHeader__Title');
 const middRedirect = document.createElement("div");

  middRedirect.className = "redirect";
  middRedirect.innerHTML = `<a cursor="pointer" href="https://dlinq.middcreate.net/catalog-request" class="fOyUs_bGBk fOyUs_fKyb fOyUs_UeJS fOyUs_cBHs fOyUs_eWbJ fOyUs_fmDy fOyUs_eeJl fOyUs_cBtr 
  fOyUs_fuTR fOyUs_cnfU fQfxa_bGBk" style="margin: 2.25rem 0px; padding: 0px; border-radius: 0.25rem; border-width: 0px; width: 100%; cursor: pointer;">
  <span class="fQfxa_caGd fQfxa_fKcQ fQfxa_eCSh fQfxa_ImeN undefined fQfxa_dqAF">
  <span class="fQfxa_biBD">Middlebury Community Members Request Courses Here</span></span></a>`;
  regTitle.parentNode.insertBefore(middRedirect, regTitle.nextSibling);
}

//check email on focus change
if(document.getElementsByName("email")[0]){
  const emailField = document.getElementsByName("email")[0];
  emailField.addEventListener("blur", function() {
    const emailValue = emailField.value.toLowerCase();
    if(emailValue.includes('middlebury.edu')){
      const redirectText = `
           <div class="modal-content"><span id="closeModal" class="close">&times;</span>
        <h1>It looks like you are a Middlebury community member.</h1> 
        <h1>Please request Catalog courses <a href="https://dlinq.middcreate.net/catalog-request">here.</a></h1>
        </div>`;
      const modalRedirect = document.createElement("div");
      modalRedirect.className = "modal";
      modalRedirect.id = "myModal";
      modalRedirect.innerHTML = redirectText;
      modalRedirect.style = 'display:block';
      //SET DISPLAY TO BLOCK here . . . 
      const regTitle = document.querySelector('.RegistrationHeader__Title');
      regTitle.parentNode.insertBefore(modalRedirect, regTitle.nextSibling);
      const modalClose = document.querySelector('#closeModal');
       modalClose.addEventListener("click", hideModal);
    }
  });

  

  function hideModal(){
    const theModal = document.querySelector('#myModal')
    theModal.style.display = "none";
  }
}


/*FAQ functions*/
if(document.querySelector('#faq-button')){
  const faqButton = document.querySelector('#faq-button');
  faqButton.addEventListener("click", showFaq, false);
  makeFaqModal(2);
}

function showFaq(){
  const faqModal = document.querySelector('#faq-holder');
  faqModal.style.display = "block";
  faqModal.focus();
}

function hideFaqModal(){
   const faqModal = document.querySelector('#faq-holder');
  faqModal.style.display = "none";
}

function makeFaqModal(id){
fetch(
  "https://experiments.middcreate.net/faqs/wp-json/wp/v2/pages?id="+id
)
  .then(function(response) {
  // Convert to JSON
  return response.json();
})
  .then(function(data) {
  // GOOD!

    makeFaq(data[0].content.rendered);
   const modalClose = document.querySelector('#closeFaqModal');
   modalClose.addEventListener("click", hideFaqModal);
  
});
}


function makeFaq(data){
  const destination = document.querySelector('#faq-modal');
  destination.innerHTML = ' <span id="closeFaqModal" class="close">&times;</span>'+data;
    console.log(data)
}

/*END FAQ stuff*/

// if( document.querySelector('#user-nav')){
// const loginButton = document.querySelector('#user-nav');
// if(loginButton.getAttribute('role') != 'group'){
//   loginButton.style.display = 'none';
// }
// }