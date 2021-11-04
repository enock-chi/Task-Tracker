import { React, useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';

function App() {
  const [showAddTask,setShowAdd]= useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 08:30am',
      reminder: false,
    },
    {
      id: 3,
      text: 'food shopping',
      day: 'Feb 30th at 4:30pm',
      reminder: false,
    }]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  }


  const DeleteTask = (ID) => {
    setTasks(tasks.filter((task) => task.id !== ID))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {
      ...task, reminder:
        !task.reminder
    } : task))
  }



  return (
    <div className="App">
      <Header onAdd={() => setShowAdd(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTasks onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks attTasks={tasks} onDelete={DeleteTask} onToggle={toggleReminder} /> : 'Tasks Empty'}

    </div>
  );
}

export default App;
