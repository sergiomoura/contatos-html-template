const modal = document.getElementById("modal");

let mostrarModal = () => {
    modal.style.display = "flex"
    modal.style.opacity = 1
}

let esconderModal = (evt) => {
    evt.bubbles = false;
    modal.style.display = "none"
    modal.style.opacity = 0
}

let link = document.getElementById("linkAbrirModal");
link.addEventListener('click', mostrarModal);

let edits = document.querySelectorAll("section > a");
edits.forEach(
    e => e.addEventListener('click', mostrarModal)
)

modal.addEventListener('click',esconderModal)

