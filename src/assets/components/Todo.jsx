import React from 'react';

const Todo = ({ tarea, eliminarTarea }) => {
    return (
        <li>
            {tarea.nombre}
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
        </li>
    );
};

export default Todo;
