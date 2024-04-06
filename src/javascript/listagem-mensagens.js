function listarMensagens(){
    let tbody = document.getElementById('tbody');
    tbody.innerText = "";

    mensagens = JSON.parse(localStorage.getItem("lista-contatos"));

    for(let i = 0; i < mensagens.length; i++){
        let tr = tbody.insertRow();

        let thNumero = document.createElement('th');
        thNumero.setAttribute('scope', 'row');
        thNumero.innerText = i + 1; 
        tr.appendChild(thNumero);

        let tdNome = tr.insertCell(); 
        let tdEmail = tr.insertCell();
        let tdMensagem = tr.insertCell();

        tdNome.innerText = this.mensagens[i].nome;
        tdEmail.innerText = this.mensagens[i].email;
        tdMensagem.innerText = this.mensagens[i].mensagem;

    }
}

listarMensagens();
