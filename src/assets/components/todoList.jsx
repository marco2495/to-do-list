function List() {
    return (
        <>
            <section>
                <h1>Lista de tareas</h1>
                <form id="agregarTarea">
                    <input type="text" id="nuevaTarea" placeholder="Agregar nueva tarea"></input>
                    <button type="submit">Agregar</button>
                </form>
                <ul id="listaTareas"></ul>
            </section>
            <section>
                <h1>Tareas terminadas</h1>

                <form id="eiminarTarea">
                    <input type="text" id="nuevaTarea" placeholder="Agregar nueva tarea" disabled></input>
                    <button type="submit" i>Eliminar</button>
                </form>

                <ul id="listaTareas"></ul>
            </section>
        </>
    );
}
export default List;