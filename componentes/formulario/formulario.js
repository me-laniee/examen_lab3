export function formulario() {
    let section = document.createElement("section");
    section.className = "section";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Ingresa tu tarea";

    let btnAgregar = document.createElement("button");
    btnAgregar.textContent = "Agregar la tarea";

    let lista = document.createElement("ul");
    lista.className = "lista-tareas";

    btnAgregar.addEventListener("click", () => {
        let nombre = inputNombre.value.trim();

        if (nombre) {
            let item = document.createElement("li");
            item.textContent = `${nombre}`;

            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "X";
            btnEliminar.className = "btn-eliminar";

            btnEliminar.addEventListener("click", () => {
                item.remove();
                let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
                tareas = tareas.filter(p => !(p.nombre === nombre));
                localStorage.setItem("tareas", JSON.stringify(tareas));
            });

            item.appendChild(btnEliminar);
            lista.appendChild(item);

            let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
            tareas.push({ nombre });
            localStorage.setItem("tareas", JSON.stringify(tareas));

            inputNombre.value = "";
        }
    });

    let tareassGuardados = JSON.parse(localStorage.getItem("tareas")) || [];
    tareasGuardados.forEach(p => {
        let item = document.createElement("li");
        item.textContent = `${p.nombre}`;

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.className = "btn-eliminar";

        btnEliminar.addEventListener("click", () => {
            item.remove();
            let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
            tareas = tareas.filter(prod => !(prod.nombre === p.nombre));
            localStorage.setItem("tareas", JSON.stringify(tareas));
        });

        item.appendChild(btnEliminar);
        lista.appendChild(item);
    });

    section.appendChild(inputNombre);
    section.appendChild(btnAgregar);
    section.appendChild(lista);

    return formulario;
}