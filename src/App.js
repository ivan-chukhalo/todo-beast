import React from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Task from "./components/Task";
import { nanoid } from "nanoid";

// TODO: add props for Task component

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.isCompleted,
  Completed: (task) => task.isCompleted,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = React.useState(props.tasks);
  const [filter, setFilter] = React.useState("All");

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => {
    return (
      <Task
        id={task.id}
        name={task.name}
        isCompleted={task.isCompleted}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    );
  });

  const filterList = FILTER_NAMES.map((name) => (
    <Filter 
      key={name} 
      name={name} 
      setFilter={setFilter}
      isPressed={filter === name}  //!!!!!!!!!!!!!!!!!!!!!!!!11 ще не використав ніде
    />
  ));

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, isCompleted: false };
    setTasks([newTask, ...tasks]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks[0]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newName };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  const tasksNoun = taskList.length === 1 ? "task" : "tasks";
  const headingText = `${tasks.length} ${tasksNoun} remaining`;

  return (
    <div className="App">
      <h1 className="app-name">TodoBeast</h1>
      <Form addTask={addTask} />
      <div className="filters">{filterList}</div>
      <section className="tasks">
        <h2 className="tasks__header">{headingText}</h2>
        <ul className="tasks__list">{taskList}</ul>
      </section>
    </div>
  );
}

export default App;
