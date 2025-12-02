import { useReducer } from "react";

type Task = {
  id: string;
  name: string;
  done: boolean;
};

//Actionit: lisää
type TaskAction =
  | { type: "ADD"; payload: Task }
  | { type: "MARK_DONE"; payload: string };

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [...tasks, action.payload];
    case "MARK_DONE":
      return tasks.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
    default:
      return tasks;
  }
};

export const useTask = () => {
  const [tasks, dispatch] = useReducer(taskReducer, [] as Task[]);

  //Add task function
  const addTask = (name: string) => {
    const newtask: Task = {
      id: Date.now().toString(),
      name: name.trim(),
      done: false,
    };
    dispatch({ type: "ADD", payload: newtask });
  };

  //Marks done
  const getLineThrough = (id: string) => {
    dispatch({ type: "MARK_DONE", payload: id });
  };

  return { tasks, addTask, getLineThrough};
};
