const modal = document.getElementById("modal");

let mostrarModal = () => {
    modal.style.display = "flex"
    modal.style.opacity = 1
}

let esconderModal = () => {
    modal.style.display = "none"
    modal.style.opacity = 0
}

let onLinkAbrirModalClick = evt =>{
    mostrarModal();
}

let onButtonEditarClick = evt => {
    mostrarModal();
}

let onCancelarClick = evt => {
    esconderModal();
}

onAdicionarClick = evt => {
    esconderModal();
}

let link = document.getElementById("linkAbrirModal");
link.addEventListener('click', mostrarModal);

let edits = document.querySelectorAll("section > a");
edits.forEach(
    e => e.addEventListener('click', mostrarModal)
)

let btAdicionarClick = document.getElementById("btAdicionar");
btAdicionarClick.addEventListener('click', esconderModal);

let btCancelarClick = document.getElementById('btCancelar')
btCancelarClick.addEventListener('click', esconderModal);


