import { obtenerFormulario } from "./componentes/formulario/formulario.js";
import { obtenerTarea } from "./componentes/tarea/tarea.js";
import { obtenerTareas } from "./componentes/tareas/tareas.js";

function lista() {
    let paginaLista = document.createElement("div");
    paginaLista.className = "pagina-lista";
    paginaLista.id = "root";

    paginaLista.appendChild(obtenerFormulario());
    paginaLista.appendChild(obtenerTarea());
    paginaLista.appendChild(obtenerTareas());

    return paginaLista;
}

document.body.appendChild(lista());