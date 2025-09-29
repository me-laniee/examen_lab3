export function obtenerTareas() {
    let header = document.createElement("header");
    header.className = "header";

    let titulo = document.createElement("h1");
    titulo.textContent = "<Lista-de-Tareas>";


    header.appendChild(titulo);

    return header;
}