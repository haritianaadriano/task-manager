import React, {ChangeEvent} from 'react';
import {useTaskManager} from "@/store/useTaskManager";
import {useLocalStorage} from "@/hooks/useLocalStorage";
import {Type} from "@/types/localStorageType";

interface Task {
  id: number,
  title: string,
  completed: boolean,
}

const TaskManager = () => {
    // const createTaskRef = ...:
  const {
     tasks,
     searchTasks,
     addTask,
     updateTask,
     deleteTask,
     setSearchTask,
   } = useTaskManager();

  const handleAddTask = () => {
    const title = ""; // Replace with the value in the createTaskRef 
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    addTask(newTask);
      // eslint-disable-next-line react-hooks/rules-of-hooks
    useLocalStorage(newTask, Type.PUT, newTask.id.toString());
  };

  const handleUpdateTask = (taskId: number, updatedTask: { title: string }) => {
    updateTask(taskId, updatedTask);
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTask(e.target.value);
  };

  // See! I already give you everything!
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTasks.toLowerCase())
   );

  return (
    <div>
      <h1>Task Manager</h1>

      <input type="text" /*ref={}*//>

      <button onClick={handleAddTask}>Add Task</button>

      <input type="text" onChange={handleSearch} placeholder="Search Task" />

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input
              type="text"
              value={task.title}
              onChange={(e) =>
                handleUpdateTask(task.id, { title: e.target.value })
              }
            />
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
