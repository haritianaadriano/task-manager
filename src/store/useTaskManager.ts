import { useState } from "react";

const useTaskManager = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [searchTasks, setSearchTasks] = useState<string>("");

  const addTask = (task: any) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (id: number, task: any) => {
    const tasksCopy = [...tasks];
    tasksCopy[id] = task;
    setTasks(tasksCopy);
  };

  const deleteTask = (id: number) => {
    const tasksCopy = [...tasks];
    tasksCopy.splice(id, 1);
    setTasks(tasksCopy);
  };

  const setSearchTask = (searchTerm: string) => {
    setSearchTask(searchTerm);
  };

  return {
    tasks,
    searchTasks,
    addTask,
    updateTask,
    deleteTask,
    setSearchTask,
  };
};

export {
  useTaskManager
};
