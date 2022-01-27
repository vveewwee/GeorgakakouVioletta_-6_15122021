/*let form = null;
window.onload = function (){
    form = document.forms["fillIn"];
  }*/

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

//retrieve clien info, save them in an array

const   prenom = document.querySelector("#prenom").setAttribute('aria-labelledby','prenom');
const   nom = document.querySelector("#nom").setAttribute('aria-labelledby','nom');
const   email = document.querySelector("#email").setAttribute('aria-labelledby','email');
const   message = document.querySelector("#message").setAttribute('aria-labelledby','message');

class Client{
    constructor(name, lastname, mail, text){
        this.name = name;
        this.lastname = lastname;
        this.mail = mail;
        this. text = text;
    }
};

let newClient = new Client(prenom, nom, email,message);
//form.prenom.value 


function submitModal(){
    const form = document.forms["fillIn"];
    form.reset();
    closeModal();
    //TODO afficher un msg
}