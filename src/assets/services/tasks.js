export function getAllTasks(){
    return fetch('http://localhost:3000/tasks/')
        .then(res => res.json())
        .then(json => json)
}

//Funcion que devuelve un json con una tarea solicitada segun su id
export function getOneTask(id) {
    return fetch(`http://localhost:3000/tasks/${id}`)
        .then(res => res.json())
        .then(json => json)
}
