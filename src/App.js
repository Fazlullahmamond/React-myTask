import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Visit frinds house",
        day: "Feb 10 2021",
        reminder: true,
    },
    {
        id: 2,
        text: "Shopping Food",
        day: "Feb 10 2021",
        reminder: true,
    },
    {
        id: 3,
        text: "Going to gym",
        day: "Feb 10 2021",
        reminder: false,
    }
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000 )+1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks to show"}
    </div>
  );
}

export default App;
