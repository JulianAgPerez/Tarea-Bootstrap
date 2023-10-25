import { getAllTasks } from "../services/tasks.js"

const contenedor_hacer = document.getElementById("contenedor-hacer")
const contenedor_produccion = document.getElementById("contenedor-produccion")
const contenedor_testear = document.getElementById("contenedor-testear")
const contenedor_completada = document.getElementById("contenedor-completada")

const fillTasks = async ()=>{
    const tasks = await getAllTasks();

    tasks.forEach((task) => {
        const status = task.status;

		let container;
		if (status === "Por hacer") {
			container = contenedor_hacer
		} else if (status === "En produccion") {
			container = contenedor_produccion
		} else if (status === "Por testear") {
			container = contenedor_testear
		} else if (status === "Completada") {
			container = contenedor_completada
		}

		//Crear elemento en la categoria
		container.innerHTML += `
			<div class="col">
				<div class="card h-100">
					<img 
					class="card-img-top" 
					src="${task.image}" 
					alt=""
                    >
					<div class="card-body p-4">
						<div class="text-center">
							<h5 class="fw-bolder">${task.title}</h5>	
                            <span>Tiempo: ${task.time}</span>						
						</div>
					</div>
					<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
						<div class="text-center">
							<a href="/detalle.html?id=${task.id}" class="btn btn-outline-success mt-auto ver-tarea-btn">
                            Ver Tarea
                            </a>
						</div>
					</div>
				</div>
			</div>
		`;
	});
}

fillTasks()