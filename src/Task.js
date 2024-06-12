import React, { useState } from 'react';

function Task({ task, onDelete, onEdit }) {
  // Estado para controlar si la tarea está en modo de edición
  const [isEditing, setIsEditing] = useState(false);
  // Estado para controlar el texto de la tarea cuando está siendo editada
  const [editText, setEditText] = useState(task.text);

  // Función para manejar el cambio de texto en el modo de edición
  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  // Función para manejar el guardado del texto editado
  const handleSave = () => {
    onEdit(task.id, editText); // Llama a la función onEdit para actualizar el texto de la tarea
    setIsEditing(false); // Sale del modo de edición
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input type="text" value={editText} onChange={handleChange} />
          <button onClick={handleSave}>Guardar</button>
        </div>
      ) : (
        <div>
          {task.text}
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </div>
      )}
    </li>
  );
}

export default Task;
