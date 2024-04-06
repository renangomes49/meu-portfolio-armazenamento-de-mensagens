mensagensSubmetidas = []

var btn = document.querySelector("#btn-form-contato");

btn.addEventListener("click", function(e){
    e.preventDefault();
    
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const mensagemInput = document.querySelector("#mensagem");

    var contato = {
        nome: nameInput.value,
        email: emailInput.value,
        mensagem: mensagemInput.value,
    }

    mensagensSubmetidas.push(contato);

    localStorage.setItem("lista-contatos", JSON.stringify(mensagensSubmetidas));

    nameInput.value = "";
    emailInput.value = "";
    mensagemInput.value = "";
});

