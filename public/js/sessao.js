// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var gamertag = sessionStorage.gamertag_usuario;

    var b_usuario = document.getElementById("idJogador");

    if (email != null && gamertag != null) {
        b_usuario.innerHTML = gamertag;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "block";
}

function finalizarAguardar(texto) {
    // Pega os elementos certos
    var divAguardar = document.getElementById("div_aguardar");
    var divErro = document.getElementById("cardErro");
    var spanErro = document.getElementById("mensagem_erro");

    // Esconde o loading
    divAguardar.style.display = "none";

    // Exibe erro se tiver texto
    if (texto) {
        divErro.style.display = "block";
        spanErro.innerHTML = texto;
    }
}

