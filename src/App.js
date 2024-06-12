import React, { useState } from 'react';
import TaskList from './TaskList';
import './App.css';

function App() {
  // Estado para las tareas
  const [tasks, setTasks] = useState([]);
  // Estado para el texto de la nueva tarea
  const [newTaskText, setNewTaskText] = useState('');

  // Función para añadir una nueva tarea
  const addTask = () => {
    if(newTaskText.trim()=== ''){
      alert('El campo de la tarea no puede estar vacio');
      return;
    }
    const newTask = { id: tasks.length + 1, text: newTaskText };
    setTasks([...tasks, newTask]);
    setNewTaskText(''); // Limpiar el campo de entrada después de añadir la tarea
  };

  // Función para eliminar una tarea por id
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Función para editar una tarea por id
  const editTask = (id, newText) => {
    if(newText.trim()=== ''){
      alert('El campo de la tarea no puede estar vacio');
      return;
    }
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tareas</h1>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button onClick={addTask}>Agregar Tarea</button>
        <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
      </header>
    </div>
  );
}

export default App;


