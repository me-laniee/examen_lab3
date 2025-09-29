// Componente para mostrar una tarea individual
export function crearTareaElemento(tarea, onEliminar, onToggle) {
	const item = document.createElement('li');
	item.className = 'tarea-item';

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.checked = tarea.completada;
	checkbox.addEventListener('change', () => {
		onToggle && onToggle(tarea.id);
	});

	const span = document.createElement('span');
	span.textContent = `${tarea.titulo}${tarea.descripcion ? ' - ' + tarea.descripcion : ''}`;
	if (tarea.completada) {
		span.style.textDecoration = 'line-through';
	}

	const btnEliminar = document.createElement('button');
	btnEliminar.textContent = 'X';
	btnEliminar.className = 'btn-eliminar';
	btnEliminar.addEventListener('click', () => {
		onEliminar && onEliminar(tarea.id);
	});

	item.appendChild(checkbox);
	item.appendChild(span);
	item.appendChild(btnEliminar);
	return item;
}
