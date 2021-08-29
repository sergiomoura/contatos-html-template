const modal = document.getElementById("modal");

let mostrarModal = () => {
    modal.style.display = "flex"
    modal.style.opacity = 1
}

let esconderModel = () => {
    modal.style.display = "none"
    modal.style.opacity = 0
}

let link = document.getElementById("linkAbrirModal");
link.addEventListener('click', mostrarModal);

let cancel = document.querySelector("button.link");
cancel.addEventListener('click', esconderModel)



