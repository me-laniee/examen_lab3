const LISTA  = 'lista';

function guardarTarea(tarea) {
localStorage.setItem(LISTA, JSON.stringify(tarea));
}

function obtenerTareas() {
return JSON.parse(localStorage.getItem(LISTA)) || [];
}

export { LISTA, guardarTarea, obtenerTareas };