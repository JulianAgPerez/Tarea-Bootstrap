import { getOneTask } from "../services/tasks.js";

const id = new URLSearchParams(window.location.search).get("id");
//const id = new URLSearchParams(window.location.search).get('id');

//Inicializar elementos
const task_image = document.getElementById('task-image');
const task_title = document.getElementById('task-title');
const task_description = document.getElementById('task-description');
const task_time = document.getElementById('task-time');
const task_responsable = document.getElementById('task-responsable');
const task_status = document.getElementById('task-status');

//Rellenar los detalles del producto
const fillDetailTask = async () => {
	const task = await getOneTask(id)
	if (task) {
		task_image.src = task.image
		task_title.innerText = task.title
		task_description.innerText = task.description
		task_time.innerText = task.time
		task_responsable.innerText = task.responsable
		task_status.innerText = task.status
	}
}

fillDetailTask()