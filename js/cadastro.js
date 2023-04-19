// Capturar elementos de interesse da página
const form = document.querySelector('#form-cadastro');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const urlBase = "https://contatos-api.fly.dev/api/v1/";

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt){
    
    // Interromper o envio
    evt.preventDefault();

    // Capturar os dados do formulário
    const dados = getDadosParaRegistro();

    // Enviar os dados para a API
    const resultado = sendDadosParaApi(dados);

    // Tratar resultado do envio
    tratarResultadoDoRegistro(resultado);
}

function getDadosParaRegistro(){
    const dados = {
        name: inputNome.value,
        email: inputEmail.value,
        password: inputSenha.value
    }
    return dados;
}

async function sendDadosParaApi(dados){
    console.log(dados);
    const url = `${urlBase}auth/register`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-type':'application/json'
        }
    });

    


}

function tratarResultadoDoRegistro(resultado){}


