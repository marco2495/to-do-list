import React, { useState, useEffect } from 'react';
import Todo from './Todo';
const TodoList = () => {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    // Carga las tareas del localStorage al iniciar el componente
    useEffect(() => {
        const tareasAlmacenadas = localStorage.getItem('tareas');
        if (tareasAlmacenadas) {
            setTareas(JSON.parse(tareasAlmacenadas));
        }
    }, []);

    // Actualiza el localStorage cada vez que cambia la lista de tareas
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    const agregarTarea = () => {
        if (tarea.trim()) {
            setTareas([...tareas, { id: Date.now(), nombre: tarea }]);
            setTarea('');
        }
    };

    const eliminarTarea = (idTarea) => {
        setTareas(tareas.filter((tarea) => tarea.id !== idTarea));
    };

    return (
        <div className='todoList'>
            <h1>Lista de tareas</h1>
            <input type="text" value={tarea} onChange={(e) => setTarea(e.target.value)} />
            <button onClick={agregarTarea}>Agregar tarea</button>
            <ul>
                {tareas.map((tarea) => (
                    <Todo key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
